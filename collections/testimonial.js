Testimonials = new Mongo.Collection( 'testimonials' );

Testimonials.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Testimonials.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let TestimonialsSchema = new SimpleSchema({
  "updated": {
    type: String,
    label: "The date this testimonial was last updated on.",
    autoValue() {
      return ( new Date() ).toISOString();
    }
  },
  "title": {
    type: String,
    label: "The title of this testimonial.",
    defaultValue: "Untitled Testimonial"
  },
  "slug": {
    type: String,
    label: "The slug for this testimonial.",
    autoValue() {
      let slug              = this.value,
          existingSlugCount = Testimonials.find( { _id: { $ne: this.docId }, slug: new RegExp( slug ) } ).count(),
          existingUntitled  = Testimonials.find( { slug: { $regex: /untitled-testimonial/i } } ).count();

      if ( slug ) {
        return existingSlugCount > 0 ? `${ slug }-${ existingSlugCount + 1 }` : slug;
      } else {
        return existingUntitled > 0 ? `untitled-testimonial-${ existingUntitled + 1 }` : 'untitled-testimonial';
      }
    }
  },

  "comment": {
    type: String,
    label: "The label of this testimonial.",
    defaultValue: "Label Name"
  }
});

Testimonials.attachSchema( TestimonialsSchema );
