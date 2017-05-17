Meteor.publish( 'podcastsIndex', function() {
  return Podcasts.find( { artist: true } );
});

Meteor.publish( 'urlsIndex', function( urls ) {
  check( url, String );
  return Podcasts.find( { artist: true, artists: { $in: [ artist ] } } );
});
