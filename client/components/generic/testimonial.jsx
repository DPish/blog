Testimonial = React.createClass({
  getTestimonialTitle() {
    let testimonial = this.props.testimonial;

    if ( this.props.singleTestimonial ) {
      return <h3>{ testimonial.title }</h3>;
    } else {
      return <h3><a href={ `/testimonials/${ testimonial.slug }`}>{ testimonial.title }</a></h3>;
    }
  },
  getTestimonialComment(){
    return <p> {testimonial.comment} </p>;
  },
  render() {
    let { formatLastUpdate } = ReactHelpers,
        testimonial                 = this.props.testimonial;

    return <div className="testimonial">
      { this.getTestimonialTitle() }
      <p><strong>Last Updated:</strong> { formatLastUpdate( testimonial.updated ) }</p>
      { this.getTestimonialComment}
    </div>;
  }
});
