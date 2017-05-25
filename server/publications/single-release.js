Meteor.publish( 'singleRelease', ( releaseSlug ) => {
  check( releaseSlug, String );

  return Releases.find( { slug: releaseSlug } );
});
