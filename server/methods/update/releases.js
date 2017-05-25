Meteor.methods({
  saveRelease( release ) {
    check( release, Object );

    let releaseId = release._id;
    delete release._id;

    Releases.upsert( releaseId, { $set: release } );
  }
});
