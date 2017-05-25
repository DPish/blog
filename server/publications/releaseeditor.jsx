Meteor.publish( 'releaseeditor', ( releaseId ) => {
  check( releaseId, String );

  return [
    Releases.find( { _id: releaseId } ),
    Meteor.users.find( {}, { fields: { profile: 1 } } )
  ];
});
