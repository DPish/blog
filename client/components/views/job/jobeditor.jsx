JobEditor = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'jobeditor', this.props.job );

    return {
      job: Jobs.findOne( { _id: this.props.job } )
    };
  },
  validations() {
    let component = this;

    return {
      rules: {
        jobTitle: {
          required: true
        }
      },
      messages: {
        jobTitle: {
          required: "Hang on there, a job title is required!"
        }
      },
      submitHandler() {
        let { getValue, isChecked } = ReactHelpers;

        let form = component.refs.editJobForm.refs.form,
            job = {
              _id: component.props.job,
              title: getValue( form, '[name="jobTitle"]' ),

              name: getValue( form, '[name="jobName"]' ),
              email: getValue( form, '[name="jobEmail"]' ),
              contact: getValue( form, '[name="jobContact"]' ),
              job: getValue( form, '[name="jobJob"]' ),
              slug: getValue( form, '[name="jobSlug"]' ),
            };

        Meteor.call( 'saveJob', job, ( error, response ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            FlowRouter.go( `/jobs` );
            Bert.alert( 'Job saved!', 'success' );
          }
        });
      }
    };
  },
  generateSlug( event ) {
    let { setValue } = ReactHelpers,
        form         = this.refs.editJobForm.refs.form,
        title        = event.target.value;

    setValue( form, '[name="jobSlug"]', getSlug( title, { custom: { "'": "" } } ) );
  },
  getLastUpdate() {
    if ( this.data ) {
      let { formatLastUpdate } = ReactHelpers,
          job                 = this.data.job;

      return `${ formatLastUpdate( job.updated ) }`;
    }
  },
  handleRemoveJob(e) {
    e.preventDefault();

    Meteor.call( 'removeJob', this.data.job._id, ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/jobs` );
        Bert.alert( 'Job deleted!', 'success' );


      }
    });


  },

  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    if ( !this.data.job ) { return <div />; }

    return <GridRow>
     <br />
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <PageHeader size="h4" label="Edit Job" />
        <Form ref="editJobForm" id="edit-job" className="edit-job" validations={ this.validations() } onSubmit={ this.handleSubmit }>
          <p className="updated-date">
            <strong>Last Updated:</strong> { this.getLastUpdate() }
          </p>
          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="jobTitle"
              label="Job Title"
              onChange={ this.generateSlug }
              defaultValue={ this.data.job && this.data.job.title }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              disabled={ true }
              showLabel={ false }
              style="input"
              type="text"
              name="jobSlug"
              label="Slug"
              defaultValue={ this.data.job && this.data.job.slug }
            />
          </FormGroup>



          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="jobName"
              label="Name"
              defaultValue={ this.data.job && this.data.job.name }
            />
          </FormGroup>
          <FormGroup>
          <FormControl
            showLabel={ false }
            style="input"
            type="text"
            name="jobEmail"
            label="Email"
            defaultValue={ this.data.job && this.data.job.email }
          />
        </FormGroup>
        <FormGroup>
        <FormControl
          showLabel={ false }
          style="input"
          type="text"
          name="jobJob"
          label="Job"
          defaultValue={ this.data.job && this.data.job.job }
        />
      </FormGroup>
      <FormGroup>
      <FormControl
        showLabel={ false }
        style="input"
        type="text"
        name="jobContact"
        label="contact"
        defaultValue={ this.data.job && this.data.job.contact }
      />
    </FormGroup>



          <FormGroup>
            <SuccessButton type="submit" label="Save Job" />
          </FormGroup>
          <FormGroup>
            <Button onClick={ this.handleRemoveJob } label="Delete" />
          </FormGroup>

        </Form>
      </GridColumn>
    </GridRow>;
  }
});
