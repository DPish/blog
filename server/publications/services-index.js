Meteor.publish( 'servicesIndex', function() {
  return Services.find( { published: true } );
});

Meteor.publish( 'tagsIndexService', function( tag ) {
  check( tag, String );
  return Services.find( { published: true, tags: { $in: [ tag ] } } );
});
