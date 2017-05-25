Meteor.methods({
  newRelease() {
    return Releases.insert( {} );
  }
});
