Meteor.methods({
  newTestimonial() {
    return Testimonials.insert( {} );
  }
});
