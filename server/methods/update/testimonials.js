Meteor.methods({
  saveTestimonial( testimonial ) {
    check( testimonial, Object );

    let testimonialId = testimonial._id;
    delete testimonial._id;

    Testimonials.upsert( testimonialId, { $set: testimonial } );
  }
});
