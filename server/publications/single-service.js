Meteor.publish( 'singleService', ( serviceSlug ) => {
  check( serviceSlug, String );

  return Services.find( { slug: serviceSlug } );
});
