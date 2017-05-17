Meteor.methods({
  newPodcast() {
    return Posts.insert( {} );
  }
});
