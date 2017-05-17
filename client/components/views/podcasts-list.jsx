PodcastsList = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'podcastsList' );

    return {
      podcasts: Podcasts.find().fetch().map( ( podcast ) => {
        return { uid: podcast._id, href: `/podcasts/${ podcast._id }/edit`, label: podcast.url};
      })
    };
  },
  handleNewPodcastUrl() {
    Meteor.call( 'newPodcast', ( error, PodcastUrlId ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/podcasts/${ PodcastUrlId }/edit` );
        Bert.alert( 'All set! Get to typin\'', 'success' );
      }
    });
  },
  handleNewPodcast() {
    Meteor.call( 'newPodcast', ( error, podcastId ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/podcasts/${ podcastId }/edit` );
        Bert.alert( 'All set! Get to typin\'', 'success' );
      }
    });
  },
  renderPodcastsList() {
    if ( this.data.podcasts.length > 0 ) {
      return <ListGroup linked={ true } items={ this.data.podcasts }  />;
    } else {
      return <WarningAlert>No podcasts found.</WarningAlert>;
    }
  },
  render() {
    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <SuccessButton type="button" label="New Podcast" onClick={ this.handleNewPodcast } />


      <PageHeader size="h4" label="Podcasts" />
        { this.renderPodcastsList() }
      </GridColumn>
    </GridRow>;
  }
});
