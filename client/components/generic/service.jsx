Service = React.createClass({
  getServiceTitle() {
    let service = this.props.service;

    if ( this.props.singleService ) {
      return <h3>{ service.title }</h3>;
    } else {
      return <h3><a href={ `/services/${ service.slug }`}>{ service.title }</a></h3>;
    }
  },
  render() {
    let { formatLastUpdate } = ReactHelpers,
        service                 = this.props.service;

    return <div className="service">
      { this.getServiceTitle() }
      <p><strong>Last Updated:</strong> { formatLastUpdate( service.updated ) }</p>
    </div>;
  }
});
