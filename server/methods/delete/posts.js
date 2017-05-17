Meteor.methods({
  'Post.remove':function(id){
      check( id, String);
       Posts.remove(id);
  }
});
