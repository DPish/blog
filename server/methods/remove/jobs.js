Meteor.methods({
  removeJob( id ) {
    check( id, String );


    Jobs.remove(id);
  }
});
