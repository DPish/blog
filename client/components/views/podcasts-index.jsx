PodcastsIndex = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let query = {};

    if ( this.props.tag ) {
      Meteor.subscribe( 'tagsIndex', this.props.url );
      query = { tags: { $in: [ this.props.url ] } };
    } else {
      Meteor.subscribe( 'podcastsIndex' );
    }

    return {
      podcasts: Podcasts.find( query, { sort: { updated: -1 } } ).fetch()

    };
  },
  renderHeader() {
    if ( this.props.url ) {
      return <Jumbotron className="tags-header">
        <h4>Podcasts tagged with: { this.props.url }.</h4>
      </Jumbotron>;
    } else {
      return <Jumbotron className="blog-header">

        <h2>Podcast url</h2>

      </Jumbotron>;
    }
  },
  renderPodcasts() {
    if ( this.data.podcasts.length > 0 ) {
      return this.data.podcasts.map( ( podcast ) => {
        return <Podcast key={ podcast._id } podcast={ podcast } />;
      });
    } else {
      return <WarningAlert>No podcasts found.</WarningAlert>;
    }
  },
  render() {
    return <div className="podcasts">
      <GridRow>
        <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
          { this.renderHeader() }
            <Podcast />
          { this.renderPodcasts() }

        </GridColumn>
      </GridRow>
    </div>;
  }
});
