Meteor.methods({
  saveService( service ) {
    check( service, Object );

    let serviceId = service._id;
    delete service._id;

    Services.upsert( serviceId, { $set: service } );
  }
});
