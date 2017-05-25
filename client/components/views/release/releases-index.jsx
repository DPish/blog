ReleasesIndex = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let query = {};

    if ( this.props.tag ) {
      Meteor.subscribe( 'tagsIndexRelease', this.props.tag );
      query = { tags: { $in: [ this.props.tag ] } };
    } else {
      Meteor.subscribe( 'releasesIndex' );
    }

    return {
      releases: Releases.find( query, { sort: { updated: -1 } } ).fetch(),

    };
  },
  renderHeader() {

    if ( this.props.tag ) {
      return <Jumbotron className="tags-header">
        <h4>Releases tagged with: { this.props.tag }.</h4>
      </Jumbotron>;
    } else {
      return <Jumbotron className="blog-header">
        <h2>Get Buff</h2>
        <h4>A new blog by the HD Buff crew.</h4>
      </Jumbotron>;
    }
  },
  renderReleases() {
    if ( this.data.releases.length > 0 ) {
      return this.data.releases.map( ( release ) => {
        return <Release key={ release._id } release={ release } />;
      });
    } else {
      return <WarningAlert>No releases found.</WarningAlert>;
    }
  },


  render() {
    return <div className="releases">
      <GridRow>
        <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">

          { this.renderHeader() }
          { this.renderReleases() }
        </GridColumn>
      </GridRow>
    </div>;
  }
});
