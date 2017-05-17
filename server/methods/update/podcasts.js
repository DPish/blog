Meteor.methods({
  savePodcast( podcast ) {
    check( podcast, Object );

    let podcastId = podcast._id;
    delete podcast._id;

    Podcasts.upsert( podcastId, { $set: podcast } );
  }
});
