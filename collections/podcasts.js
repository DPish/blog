Podcasts = new Mongo.Collection( 'podcasts' );

Podcasts.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Podcasts.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let PodcastsSchema = new SimpleSchema({

  "slug": {
    type: String,
    label: "The slug for this podcast.",
    autoValue() {
      let slug              = this.value,
          existingSlugCount = Podcasts.find( { _id: { $ne: this.docId }, slug: new RegExp( slug ) } ).count(),
          existingUntitled  = Podcasts.find( { slug: { $regex: /untitled-podcast/i } } ).count();

      if ( slug ) {
        return existingSlugCount > 0 ? `${ slug }-${ existingSlugCount + 1 }` : slug;
      } else {
        return existingUntitled > 0 ? `untitled-podcast-${ existingUntitled + 1 }` : 'untitled-podcast';
      }
    }
  },
  "artist": {
    type: String,
    label: "The content of this podcast.",
    optional: true
  },
  "urls": {
    type: [ String ],
    label: "The tags for this podcast.",
    optional: true
  }
});

Podcasts.attachSchema( PodcastsSchema );
