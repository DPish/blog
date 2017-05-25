Meteor.publish( 'releasesList', () => {
  return Releases.find();
});
