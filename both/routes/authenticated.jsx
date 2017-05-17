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

authenticatedRoutes.route( '/podcasts/:_id/edit', {
  name: 'editorurlmix',
  action( params ) {
    ReactLayout.render( App, { yield: <Editorurlmix podcast={ params._id } /> } );
  }
});

authenticatedRoutes.route( '/podcasts', {
  name: 'podcasts',
  action() {
    ReactLayout.render( App, { yield: <PodcastsList /> } );
  }
});
