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
