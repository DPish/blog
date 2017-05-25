SingleService = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let sub = Meteor.subscribe( 'singleService', this.props.slug );

    return {
      service: Services.findOne( { slug: this.props.slug } ),
      ready: sub.ready()
    };
  },
  render() {
    if ( !this.data ) { return <div />; }
    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <Service singleService={ true } service={ this.data.ready && this.data && this.data.service } />
      </GridColumn>
    </GridRow>;
  }
});
