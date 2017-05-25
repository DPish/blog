Meteor.publish( 'servicesList', () => {
  return Services.find();
});
