Meteor.methods({
  newService() {
    return Services.insert( {} );
  }
});
