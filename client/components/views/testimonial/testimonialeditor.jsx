TestimonialEditor = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'testimonialeditor', this.props.testimonial );

    return {
      testimonial: Testimonials.findOne( { _id: this.props.testimonial } )
    };
  },
  validations() {
    let component = this;

    return {
      rules: {
        testimonialTitle: {
          required: true
        }
      },
      messages: {
        testimonialTitle: {
          required: "Hang on there, a testimonial title is required!"
        }
      },
      submitHandler() {
        let { getValue, isChecked } = ReactHelpers;

        let form = component.refs.editTestimonialForm.refs.form,
            testimonial = {
              _id: component.props.testimonial,
              title: getValue( form, '[name="testimonialTitle"]' ),
              label: getValue( form, '[name="testimonialLabel"]' ),
              comment: getValue( form, '[name="testimonialComment"]' ),
              slug: getValue( form, '[name="testimonialSlug"]' ),
            };

        Meteor.call( 'saveTestimonial', testimonial, ( error, response ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            FlowRouter.go( `/testimonials` );
            Bert.alert( 'Testimonial saved!', 'success' );
          }
        });
      }
    };
  },
  generateSlug( event ) {
    let { setValue } = ReactHelpers,
        form         = this.refs.editTestimonialForm.refs.form,
        title        = event.target.value;

    setValue( form, '[name="testimonialSlug"]', getSlug( title, { custom: { "'": "" } } ) );
  },
  getLastUpdate() {
    if ( this.data ) {
      let { formatLastUpdate } = ReactHelpers,
          testimonial                 = this.data.testimonial;

      return `${ formatLastUpdate( testimonial.updated ) }`;
    }
  },
  handleRemoveTestimonial(e) {
    e.preventDefault();

    Meteor.call( 'removeTestimonial', this.data.testimonial._id, ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/testimonials` );
        Bert.alert( 'Testimonial deleted!', 'success' );


      }
    });


  },

  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    if ( !this.data.testimonial ) { return <div />; }

    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <PageHeader size="h4" label="Edit Testimonial" />
        <Form ref="editTestimonialForm" id="edit-testimonial" className="edit-testimonial" validations={ this.validations() } onSubmit={ this.handleSubmit }>
          <p className="updated-date">
            <strong>Last Updated:</strong> { this.getLastUpdate() }
          </p>
          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="testimonialTitle"
              label="Testimonial Title"
              onChange={ this.generateSlug }
              defaultValue={ this.data.testimonial && this.data.testimonial.title }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="testimonialLabel"
              label="Label Name"
              defaultValue={ this.data.testimonial && this.data.testimonial.label }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="testimonialComment"
              label="Comment"
              defaultValue={ this.data.testimonial && this.data.testimonial.comment }
            />
          </FormGroup>

          <FormGroup>
            <FormControl
              disabled={ true }
              showLabel={ false }
              style="input"
              type="text"
              name="testimonialSlug"
              label="Slug"
              defaultValue={ this.data.testimonial && this.data.testimonial.slug }
            />
          </FormGroup>
          <FormGroup>
            <SuccessButton type="submit" label="Save Testimonial" />
          </FormGroup>
          <FormGroup>
            <Button onClick={ this.handleRemoveTestimonial } label="Delete" />
          </FormGroup>

        </Form>
      </GridColumn>
    </GridRow>;
  }
});
