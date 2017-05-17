Meteor.publish( 'singlePodcast', ( podcastSlug ) => {
  check( podcastSlug, String );

  return Podcasts.find( { slug: podcastSlug } );
});
