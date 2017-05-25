ServicesIndex = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let query = {};

    if ( this.props.tag ) {
      Meteor.subscribe( 'tagsIndexService', this.props.tag );
      query = { tags: { $in: [ this.props.tag ] } };
    } else {
      Meteor.subscribe( 'servicesIndex' );
    }

    return {
      services: Services.find( query, { sort: { updated: -1 } } ).fetch(),

    };
  },
  renderHeader() {

    if ( this.props.tag ) {
      return <Jumbotron className="tags-header">
        <h4>Services tagged with: { this.props.tag }.</h4>
      </Jumbotron>;
    } else {
      return <Jumbotron className="blog-header">
        <h2>Get Buff</h2>
        <h4>A new blog by the HD Buff crew.</h4>
      </Jumbotron>;
    }
  },
  renderServices() {
    if ( this.data.services.length > 0 ) {
      return this.data.services.map( ( service ) => {
        return <Service key={ service._id } service={ service } />;
      });
    } else {
      return <WarningAlert>No services found.</WarningAlert>;
    }
  },


  render() {
    return <div className="services">
      <GridRow>
        <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">

          { this.renderHeader() }
          { this.renderServices() }
        </GridColumn>
      </GridRow>
    </div>;
  }
});
