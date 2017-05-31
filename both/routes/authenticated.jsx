const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated'
});

authenticatedRoutes.route( '/posts', {
  name: 'posts',
  action() {
    ReactLayout.render( App, { yield: <PostsList /> } );
  }
});

authenticatedRoutes.route( '/posts/:_id/edit', {
  name: 'editor',
  action( params ) {
    ReactLayout.render( App, { yield: <Editor post={ params._id } /> } );
  }
});

authenticatedRoutes.route( '/releases', {
  name: 'releases',
  action() {
    ReactLayout.render( App, { yield: <ReleasesList /> } );
  }
});

authenticatedRoutes.route( '/releases/:_id/edit', {
  name: 'releaseeditor',
  action( params ) {
    ReactLayout.render( App, { yield: <ReleaseEditor release={ params._id } /> } );
  }
});

authenticatedRoutes.route( '/services', {
  name: 'services',
  action() {
    ReactLayout.render( App, { yield: <ServicesList /> } );
  }
});

authenticatedRoutes.route( '/services/:_id/edit', {
  name: 'serviceeditor',
  action( params ) {
    ReactLayout.render( App, { yield: <ServiceEditor service={ params._id } /> } );
  }
});

authenticatedRoutes.route( '/testimonials', {
  name: 'testimonials',
  action() {
    ReactLayout.render( App, { yield: <TestimonialsList /> } );
  }
});

authenticatedRoutes.route( '/testimonials/:_id/edit', {
  name: 'testimonialeditor',
  action( params ) {
    ReactLayout.render( App, { yield: <TestimonialEditor testimonial={ params._id } /> } );
  }
});

authenticatedRoutes.route( '/jobs', {
  name: 'jobs',
  action() {
    ReactLayout.render( App, { yield: <JobsList /> } );
  }
});

authenticatedRoutes.route( '/jobs/:_id/edit', {
  name: 'jobeditor',
  action( params ) {
    ReactLayout.render( App, { yield: <JobEditor job={ params._id } /> } );
  }
});
