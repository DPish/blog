Jobs = new Mongo.Collection( 'jobs' );

Jobs.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Jobs.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let JobsSchema = new SimpleSchema({
  "updated": {
    type: String,
    label: "The date this job was last updated on.",
    autoValue() {
      return ( new Date() ).toISOString();
    }
  },
  "title": {
    type: String,
    label: "The title of this job.",
    defaultValue: "Untitled Job"
  },
  "slug": {
    type: String,
    label: "The slug for this job.",
    autoValue() {
      let slug              = this.value,
          existingSlugCount = Jobs.find( { _id: { $ne: this.docId }, slug: new RegExp( slug ) } ).count(),
          existingUntitled  = Jobs.find( { slug: { $regex: /untitled-job/i } } ).count();

      if ( slug ) {
        return existingSlugCount > 0 ? `${ slug }-${ existingSlugCount + 1 }` : slug;
      } else {
        return existingUntitled > 0 ? `untitled-job-${ existingUntitled + 1 }` : 'untitled-job';
      }
    }
  },

  "name": {
    type: String,
    label: "The label of this job.",
    defaultValue: "Name"
  },
  "email": {
    type: String,
    label: "The label of this job.",
    defaultValue: "Email"
  },
  "job": {
    type: String,
    label: "The label of this job.",
    defaultValue: "Job"
  },
  "contact": {
    type: String,
    label: "The label of this job.",
    defaultValue: "Contact"
  }
});

Jobs.attachSchema( JobsSchema );
