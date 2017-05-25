AppHeader = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    return {
      brandLink: !!Meteor.user() ? '/posts' : '/',
      user: Meteor.user()
    };
  },
  render() {
    return <NavBar id="app-header" brandLink={ this.data.brandLink } brand="Painting Comp.">
      { this.props.hasUser ? <AuthenticatedNavigation user={ this.data.user } /> : <PublicNavigation /> }
    </NavBar>;
  }
});
