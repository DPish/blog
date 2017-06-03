ServiceEditor = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'serviceeditor', this.props.service );

    return {
      service: Services.findOne( { _id: this.props.service } )
    };
  },
  validations() {
    let component = this;

    return {
      rules: {
        serviceTitle: {
          required: true
        }
      },
      messages: {
        serviceTitle: {
          required: "Hang on there, a service title is required!"
        }
      },
      submitHandler() {
        let { getValue, isChecked } = ReactHelpers;

        let form = component.refs.editServiceForm.refs.form,
            service = {
              _id: component.props.service,
              title: getValue( form, '[name="serviceTitle"]' ),
              label: getValue( form, '[name="serviceLabel"]' ),
              painting: getValue( form, '[name="servicePainting"]' ),
              imgUrl: getValue( form, '[name="serviceImg"]' ),
              slug: getValue( form, '[name="serviceSlug"]' ),
              published: isChecked( form, '[name="servicePublished"]' ),
            };

        Meteor.call( 'saveService', service, ( error, response ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            FlowRouter.go( `/services` );
            Bert.alert( 'Service saved!', 'success' );
          }
        });
      }
    };
  },
  generateSlug( event ) {
    let { setValue } = ReactHelpers,
        form         = this.refs.editServiceForm.refs.form,
        title        = event.target.value;

    setValue( form, '[name="serviceSlug"]', getSlug( title, { custom: { "'": "" } } ) );
  },
  getLastUpdate() {
    if ( this.data ) {
      let { formatLastUpdate } = ReactHelpers,
          service                 = this.data.service;

      return `${ formatLastUpdate( service.updated ) }`;
    }
  },
  handleRemoveService(e) {
    e.preventDefault();

    Meteor.call( 'removeService', this.data.service._id, ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/services` );
        Bert.alert( 'Service deleted!', 'success' );


      }
    });


  },

  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    if ( !this.data.service ) { return <div />; }

    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <PageHeader size="h4" label="Edit Service" />
        <Form ref="editServiceForm" id="edit-service" className="edit-service" validations={ this.validations() } onSubmit={ this.handleSubmit }>
          <p className="updated-date">
            <strong>Last Updated:</strong> { this.getLastUpdate() }
          </p>
          <FormGroup>
              <FormControl
                style="checkbox"
                name="servicePublished"
                id="#service-published"
                label="Published?"
                defaultValue={ this.data.service && this.data.service.published }
              />
            </FormGroup>
          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="serviceTitle"
              label="Service Title"
              onChange={ this.generateSlug }
              defaultValue={ this.data.service && this.data.service.title }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              disabled={ true }
              showLabel={ false }
              style="input"
              type="text"
              name="serviceSlug"
              label="Slug"
              defaultValue={ this.data.service && this.data.service.slug }
            />
          </FormGroup>

          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="serviceLabel"
              label="Label Name"
              defaultValue={ this.data.service && this.data.service.label }
            />
          </FormGroup>

          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="serviceImg"
              label="Img"
              defaultValue={ this.data.service && this.data.service.imgUrl }
            />
          </FormGroup>

          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="servicePainting"
              label="Painting"
              defaultValue={ this.data.service && this.data.service.painting }
            />
          </FormGroup>


          <FormGroup>
            <SuccessButton type="submit" label="Save Service" />
          </FormGroup>
          <FormGroup>
            <Button onClick={ this.handleRemoveService } label="Delete" />
          </FormGroup>

        </Form>
      </GridColumn>
    </GridRow>;
  }
});
