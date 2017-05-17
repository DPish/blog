SinglePodcast = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let sub = Meteor.subscribe( 'singlePodcast', this.props.slug );

    return {
      podcast: Podcasts.findOne( { slug: this.props.slug } ),
      ready: sub.ready()
    };
  },
  render() {
    if ( !this.data ) { return <div />; }
    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <Podcast singlePodcast={ true } podcast={ this.data.ready && this.data && this.data.podcast } />
      </GridColumn>
    </GridRow>;
  }
});
