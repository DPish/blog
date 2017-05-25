Meteor.methods({
  removeService( id ) {
    check( id, String );


    Services.remove(id);
  }
});
