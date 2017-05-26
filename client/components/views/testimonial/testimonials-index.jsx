TestimonialsIndex = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let query = {};

    if ( this.props.tag ) {
      Meteor.subscribe( 'tagsIndexTestimonial', this.props.tag );
      query = { tags: { $in: [ this.props.tag ] } };
    } else {
      Meteor.subscribe( 'testimonialsIndex' );
    }

    return {
      testimonials: Testimonials.find( query, { sort: { updated: -1 } } ).fetch(),

    };
  },
  renderHeader() {

    if ( this.props.tag ) {
      return <Jumbotron className="tags-header">
        <h4>Testimonials tagged with: { this.props.tag }.</h4>
      </Jumbotron>;
    } else {
      return <Jumbotron className="blog-header">
        <h2>Testimonials</h2>
        <h4>Let us know how we are...</h4>
      </Jumbotron>;
    }
  },
  renderTestimonials() {
    if ( this.data.testimonials.length > 0 ) {
      return this.data.testimonials.map( ( testimonial ) => {
        return <Testimonial key={ testimonial._id } testimonial={ testimonial } />;
      });
    } else {
      return <WarningAlert>No testimonials found.</WarningAlert>;
    }
  },


  render() {
    return <div className="testimonials">
      <GridRow>
        <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">

          { this.renderHeader() }
          { this.renderTestimonials() }
        </GridColumn>
      </GridRow>
    </div>;
  }
});
