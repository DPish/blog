Contact1 = React.createClass({
  validations() {
    let component = this;

    return {
      rules: {
        emailAddress: {
          required: true,
          email: true
        },
        name: {
          required: true
        },
        jobReq: {
          required: true
        },
        contactNum: {
          required: true
        }

      },
      messages: {
        emailAddress: {
          required: 'Need an email address here.',
          email: 'Is this email address legit?'
        },
        name: {
          required: 'Need a password here.'
        },
        jobReq: {
          required: 'Need a password here.'
        },
        contactNum: {
          required: 'Need a password here.'
        }
      },
      submitHandler() {
        let { getValue } = ReactHelpers;

        let form     = component.refs.jobRequestForm.refs.form,
            email    = getValue( form, '[name="emailAddress"]' ),
            name = getValue( form, '[name="name"]' ),
            jobReq = getValue( form, '[name="jobReq"]' ),
            contactNum = getValue( form, '[name="contactNum"]' );

            Meteor.call( 'saveJobRequest', jobReq, ( error, response ) => {
              if ( error ) {
                Bert.alert( error.reason, 'danger' );
              } else {
                Bert.alert( 'job request sent! please allow 24 hours for a responce.', 'success' );
              }
            });
      }
    };
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {

    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-6 col-md-5 col-lg-4">
        <PageHeader size="h4" label="Job Req" />

        <Form ref="jobRequestForm" id="jobRequest" className="jobRequest" validations={ this.validations() } onSubmit={ this.handleSubmit }>
          <FormGroup>
            <EmailInput ref="emailAddress" showLabel={ true } />
          </FormGroup>
          <FormGroup>
            <NameInput ref="name" showLabel={ true } labelLink={ nameLabelLink } />
          </FormGroup>
          <FormGroup>
            <JobreqInput ref="jobreq" showLabel={ true } labelLink={ jobreqLabelLink } />
          </FormGroup>
          <FormGroup>
            <ContactnumInput ref="contactNum" showLabel={ true } labelLink={ contactnumLabelLink } />
          </FormGroup>
          <FormGroup>
            <SuccessButton type="submit" label="Send Request" />
          </FormGroup>
        </Form>
        <p> Still have questions?  <a href="/"> F.A.Q. </a>.</p>
      </GridColumn>
    </GridRow>;
  }
});
