ReleasesList = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'releasesList' );

    return {
      releases: Releases.find().fetch().map( ( release ) => {
        return { uid: release._id, href: `/releases/${ release._id }/edit`, label: release.title };
      })

    };
  },
  handleNewRelease() {
    Meteor.call( 'newRelease', ( error, releaseId ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/releases/${ releaseId }/edit` );
        Bert.alert( 'All set! Get to typin\'', 'success' );
      }
    });
  },
  handleMixRelease() {
    FlowRouter.go( `/releases` );
  },
  renderReleasesList() {
    if ( this.data.releases.length > 0 ) {
      return <ListGroup linked={ true } items={ this.data.releases } />;
    } else {
      return <WarningAlert>No releases found.</WarningAlert>;
    }
  },
  render() {
    return <GridRow>
      <br />
      <br />
      <br />
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <SuccessButton type="button" label="New Release" onClick={ this.handleNewRelease } />
        <PageHeader size="h4" label="Releases" />
        { this.renderReleasesList() }
      </GridColumn>
    </GridRow>;
  }
});
