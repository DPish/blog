Meteor.methods({
  saveJob( job ) {
    check( job, Object );

    let jobId = job._id;
    delete job._id;

    Jobs.upsert( jobId, { $set: job } );
  }
});
