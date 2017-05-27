PublicNavigation = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    return {
      items: {
        right: [
        //  { uid: 'login', href: '/login', label: 'Log In' },
          { uid: 'home', href: '/home', label: 'Home' },
          { uid: 'about', href: '/about', label: 'About' },
          { uid: 'gallery', href: '/gallery', label: 'Gallery' },
          { uid: 'service', href: '/service', label: 'Services' },
          { uid: 'contact', href: '/contact', label: 'Contact' }
        ]
      }
    };
  },
  render() {
    return <div className="public-navigation">
      <NavBarNav position={ `navbar-right` } items={ this.data.items.right } />
    </div>;
  }
});
