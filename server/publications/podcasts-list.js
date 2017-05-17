Meteor.publish( 'podcastsList', () => {
  return Podcasts.find();
});
