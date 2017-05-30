TestimonialsList = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'testimonialsList' );

    return {
      testimonials: Testimonials.find().fetch().map( ( testimonial ) => {
        return { uid: testimonial._id, href: `/testimonials/${ testimonial._id }/edit`, label: testimonial.title };
      })

    };
  },
  handleNewTestimonial() {
    Meteor.call( 'newTestimonial', ( error, testimonialId ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/testimonials/${ testimonialId }/edit` );
        Bert.alert( 'All set! Get to typin\'', 'success' );
      }
    });
  },
  renderTestimonialsList() {
    if ( this.data.testimonials.length > 0 ) {
      return <ListGroup linked={ true } items={ this.data.testimonials } />;
    } else {
      return <WarningAlert>No testimonials found.</WarningAlert>;
    }
  },
  render() {
    return <GridRow>
      <br />
      <br />
      <br />
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <SuccessButton type="button" label="New Testimonial" onClick={ this.handleNewTestimonial } />
        <PageHeader size="h4" label="Testimonials" />
        { this.renderTestimonialsList() }
      </GridColumn>
    </GridRow>;
  }
});
