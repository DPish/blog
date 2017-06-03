MainIndex = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let query = {};
     let query1 = {};

    if ( this.props.tag ) {
      Meteor.subscribe( 'tagsIndex', this.props.tag );
      query = { tags: { $in: [ this.props.tag ] } };
    } else {
      Meteor.subscribe( 'postsIndex' );
      Meteor.subscribe( 'servicesIndex' );
    }

    return {
      posts: Posts.find( query, { sort: { updated: -1 } } ).fetch(),
      services: Services.find( query1, { sort: { updated: -1 } } ).fetch(),
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
  renderServices(){
    if ( this.data.services.length > 0 ) {
      return this.data.services.map( ( service ) => {
        return <Service key={ service._id } service={ service } />;
      });
    } else {
      return <WarningAlert>No services found.</WarningAlert>;
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
          { this.renderPosts() }<br />
        <div className="container">

          <h2> Services </h2>
          {this.renderServices()}<br />

       </div>
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
