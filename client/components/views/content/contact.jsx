Contact = React.createClass({
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
        }
      },
      messages: {
        emailAddress: {
          required: 'Need an email address here.',
          email: 'Is this email address legit?'
        },
      name: {
          required: 'Need a name here.'
        }
      },
      submitHandler() {
        alert("sumbitted")
      }
    };
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {

    return<div id="tf-contact">
    <GridRow>
      <GridRow>
        <GridColumn className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
           <PageHeader size="h2" label="Contact US" />
           <InfoAlert>
                Please contact us for a <strong> Free Estimate..</strong>
           </InfoAlert>
        </GridColumn>
      </GridRow>
      <GridRow>
          <GridRow>
            <GridColumn className="col-xs-10  col-sm-12 col-md-12 col-lg-12">
            <Form ref="jobrequestForm" id="jobRequest" className="jobRequest" validations={ this.validations() } onSubmit={ this.handleSubmit }>
               <GridColumn className="col-xs-10 col-sm-6 col-md-6 col-lg-6">
                  <FormGroup>
                    <NameInput ref="name" showLabel={ true } />
                  </FormGroup>
                  <FormGroup>
                    <EmailInput ref="emailAddress" showLabel={ true } />
                  </FormGroup>
              </GridColumn>
              <GridColumn className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <FormGroup>
                  <JobreqInput ref="jobreq" showLabel={ true } />
                </FormGroup>
                  <FormGroup>
                    <ContactnumInput ref="contactNum" showLabel={ true } />
                  </FormGroup>
              </GridColumn>
              <GridColumn className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <FormGroup>
                  <SuccessButton type="submit" label="Send Request" />
                </FormGroup>
              </GridColumn>
            </Form>
            </GridColumn>
        </GridRow>
      </GridRow>
    </GridRow>
  </div>;
  }
});
