AuthenticatedNavigation = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let userEmail = Meteor.user().emails[0].address;

    return {
      items: {
        left: [
          { uid: 'posts', href: '/posts', label: 'Posts' },
          { uid: 'releases', href: '/releases', label: 'Releases' },
          { uid: 'services', href: '/services', label: 'Services' },
          { uid: 'testimonials', href: '/testimonials', label: 'Testimonials' },
          { uid: 'jobs', href: '/jobs', label: 'Jobs' },

        ],
        right: [
          {
            uid: 'currentUser',
            href: '#',
            label: userEmail,
            dropdown: true,
            dropdownItems: [
              { uid: 'logout', href: '#', label: 'Logout', action: () => {
                return Meteor.logout( () => {
                  FlowRouter.go( 'index' );
                });
              }}
            ]
          }
        ]
      }
    };
  },
  render() {
    return <div className="authenticated-navigation">
      <NavBarNav position={ `navbar-left` } items={ this.data.items.left } />
      <NavBarNav position={ `navbar-right` } items={ this.data.items.right } />
    </div>;
  }
});
