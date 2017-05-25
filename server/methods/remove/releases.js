Meteor.methods({
  removeRelease( id ) {
    check( id, String );


    Releases.remove(id);
  }
});
