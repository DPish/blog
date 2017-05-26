Meteor.publish( 'testimonialsList', () => {
  return Testimonials.find();
});
