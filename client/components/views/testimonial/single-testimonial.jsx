SingleTestimonial = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let sub = Meteor.subscribe( 'singleTestimonial', this.props.slug );

    return {
      testimonial: Testimonials.findOne( { slug: this.props.slug } ),
      ready: sub.ready()
    };
  },
  render() {
    if ( !this.data ) { return <div />; }
    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <Testimonial singleTestimonial={ true } testimonial={ this.data.ready && this.data && this.data.testimonial } />
      </GridColumn>
    </GridRow>;
  }
});
