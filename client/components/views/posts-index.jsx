PostsIndex = React.createClass({
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
      posts: Posts.find( query, { sort: { updated: -1 } } ).fetch()

    };
  },
  renderHeader() {
    if ( this.props.tag ) {
      return <Jumbotron className="tags-header">
        <h4>Posts tagged with: { this.props.tag }.</h4>
      </Jumbotron>;
    } else {
      return <Jumbotron className="blog-header">

        <h2>New Tech-knowledgy</h2>
        <h4>A new blog on latest technology </h4>

      </Jumbotron>;
    }
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
    return <div className="posts">
      <GridRow>
        <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
          { this.renderHeader() }
            <Podcast />
          { this.renderPosts() }

        </GridColumn>
      </GridRow>
    </div>;
  }
});
