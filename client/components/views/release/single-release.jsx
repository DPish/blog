SingleRelease = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let sub = Meteor.subscribe( 'singleRelease', this.props.slug );

    return {
      release: Releases.findOne( { slug: this.props.slug } ),
      ready: sub.ready()
    };
  },
  render() {
    if ( !this.data ) { return <div />; }
    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <Release singleRelease={ true } release={ this.data.ready && this.data && this.data.release } />
      </GridColumn>
    </GridRow>;
  }
});
