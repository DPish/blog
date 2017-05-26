Meteor.publish( 'singleTestimonial', ( testimonialSlug ) => {
  check( testimonialSlug, String );

  return Testimonials.find( { slug: testimonialSlug } );
});
