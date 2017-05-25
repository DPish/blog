Meteor.publish( 'serviceeditor', ( serviceId ) => {
  check( serviceId, String );

  return [
    Services.find( { _id: serviceId } ),
    Meteor.users.find( {}, { fields: { profile: 1 } } )
  ];
});
