Meteor.publish( 'jobsList', () => {
  return Jobs.find();
});
