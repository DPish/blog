Services = new Mongo.Collection( 'services' );

Services.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Services.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let ServicesSchema = new SimpleSchema({
  "published": {
    type: Boolean,
    label: "Is this post published?",
    autoValue() {
      if ( this.isInsert ) {
        return false;
      }
    }
  },
  "updated": {
    type: String,
    label: "The date this service was last updated on.",
    autoValue() {
      return ( new Date() ).toISOString();
    }
  },
  "title": {
    type: String,
    label: "The title of this service.",
    defaultValue: "Untitled Service"
  },
  "slug": {
    type: String,
    label: "The slug for this service.",
    autoValue() {
      let slug              = this.value,
          existingSlugCount = Services.find( { _id: { $ne: this.docId }, slug: new RegExp( slug ) } ).count(),
          existingUntitled  = Services.find( { slug: { $regex: /untitled-service/i } } ).count();

      if ( slug ) {
        return existingSlugCount > 0 ? `${ slug }-${ existingSlugCount + 1 }` : slug;
      } else {
        return existingUntitled > 0 ? `untitled-service-${ existingUntitled + 1 }` : 'untitled-service';
      }
    }
  },

  "painting": {
    type: String,
    label: "The label of this service.",
    defaultValue: "Label Name"
  },
  "imgUrl": {
    type:  String,
    label: "Enter img url",
    optional: true
  }
});

Services.attachSchema( ServicesSchema );
