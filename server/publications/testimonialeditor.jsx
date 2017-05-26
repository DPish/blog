Meteor.publish( 'testimonialeditor', ( testimonialId ) => {
  check( testimonialId, String );

  return [
    Testimonials.find( { _id: testimonialId } ),
    Meteor.users.find( {}, { fields: { profile: 1 } } )
  ];
});
