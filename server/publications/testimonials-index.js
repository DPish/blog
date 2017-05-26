Meteor.publish( 'testimonialsIndex', function() {
  return Testimonials.find( { published: true } );
});

Meteor.publish( 'tagsIndexTestimonial', function( tag ) {
  check( tag, String );
  return Testimonials.find( { published: true, tags: { $in: [ tag ] } } );
});
