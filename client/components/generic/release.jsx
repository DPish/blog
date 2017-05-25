Release = React.createClass({
  getReleaseTitle() {
    let release = this.props.release;

    if ( this.props.singleRelease ) {
      return <h3>{ release.title }</h3>;
    } else {
      return <h3><a href={ `/releases/${ release.slug }`}>{ release.title }</a></h3>;
    }
  },
  render() {
    let { formatLastUpdate } = ReactHelpers,
        release                 = this.props.release;

    return <div className="release">
      { this.getReleaseTitle() }
      <p><strong>Last Updated:</strong> { formatLastUpdate( release.updated ) }</p>
    </div>;
  }
});
