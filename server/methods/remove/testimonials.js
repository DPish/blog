Meteor.methods({
  removeTestimonial( id ) {
    check( id, String );


    Testimonials.remove(id);
  }
});
