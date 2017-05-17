Meteor.publish( 'editorurlmix', ( podcastId ) => {
  check( podcastId, String );

  return [
    Podcasts.find( { _id: podcastId } ),
    Meteor.users.find( {}, { fields: { profile: 1 } } )
  ];
});
