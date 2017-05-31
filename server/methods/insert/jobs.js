Meteor.methods({
  newJob() {
    return Jobs.insert( {} );
  }
});
