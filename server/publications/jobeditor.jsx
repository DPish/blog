Meteor.publish( 'jobeditor', ( jobId ) => {
  check( jobId, String );

  return [
    Jobs.find( { _id: jobId } ),
    Meteor.users.find( {}, { fields: { profile: 1 } } )
  ];
});
