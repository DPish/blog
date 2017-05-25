Meteor.publish( 'releasesIndex', function() {
  return Releases.find( { published: true } );
});

Meteor.publish( 'tagsIndexRelease', function( tag ) {
  check( tag, String );
  return Releases.find( { published: true, tags: { $in: [ tag ] } } );
});
