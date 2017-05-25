Releases = new Mongo.Collection( 'releases' );

Releases.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Releases.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let ReleasesSchema = new SimpleSchema({
  "updated": {
    type: String,
    label: "The date this release was last updated on.",
    autoValue() {
      return ( new Date() ).toISOString();
    }
  },
  "title": {
    type: String,
    label: "The title of this release.",
    defaultValue: "Untitled Release"
  },
  "slug": {
    type: String,
    label: "The slug for this release.",
    autoValue() {
      let slug              = this.value,
          existingSlugCount = Releases.find( { _id: { $ne: this.docId }, slug: new RegExp( slug ) } ).count(),
          existingUntitled  = Releases.find( { slug: { $regex: /untitled-release/i } } ).count();

      if ( slug ) {
        return existingSlugCount > 0 ? `${ slug }-${ existingSlugCount + 1 }` : slug;
      } else {
        return existingUntitled > 0 ? `untitled-release-${ existingUntitled + 1 }` : 'untitled-release';
      }
    }
  },

  "label": {
    type: String,
    label: "The label of this release.",
    defaultValue: "Label Name"
  },
  "bio": {
    type: String,
    label: "The bio of this release.",
    defaultValue: "Untitled Release"
  },
  "beatport": {
    type: String,
    label: "The beatport link of this release.",
    defaultValue: "Beatport Link"
  },
  "coverimg": {
    type: String,
    label: "The coverimg of this release.",
    defaultValue: "Image Link"
  },

});

Releases.attachSchema( ReleasesSchema );
