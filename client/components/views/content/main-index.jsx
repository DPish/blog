MainIndex = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let query = {};

    if ( this.props.tag ) {
      Meteor.subscribe( 'tagsIndex', this.props.tag );
      query = { tags: { $in: [ this.props.tag ] } };
    } else {
      Meteor.subscribe( 'postsIndex' );
    }

    return {
      posts: Posts.find( query, { sort: { updated: -1 } } ).fetch(),
    };
  },
  renderPosts() {
    if ( this.data.posts.length > 0 ) {
      return this.data.posts.map( ( post ) => {
        return <Post key={ post._id } post={ post } />;
      });
    } else {
      return <WarningAlert>No posts found.</WarningAlert>;
    }
  },

  render() {
    return <div className="main-index">
      <GridRow>
        <GridColumn className="col-md-12">
          <br />
          <br />
          <br />
          <br />

          <Header /><br />
          <ServicePage /><br />
          { this.renderPosts() }
          <Recentwork /><br />
            <Recentgal /><br />
          <About /><br />
          <Contact /><br />
          <Footer /><br />

        </GridColumn>
      </GridRow>
    </div>;
  }
});
