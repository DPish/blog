Footer = React.createClass({


  render() {

    const sociallinks = [
      {
        name: 'Facebook',
        link: '#',
        fontlink: 'fa fa-facebook',
        newLink: ''
      },
      {
        name: 'Twitter',
        link: '#',
        fontlink: 'fa fa-twitter',
        newLink: ''
      },
      {
        name: 'instagram',
        link: '#',
        fontlink: 'fa fa-instagram',
        newLink: ''
      },
      {
        name: 'E-Mail',
        link: '#',
        fontlink: 'fa fa-envelope',
        newLink: ''
      },
      {
        name: 'Soundcloud',
        link: '#',
        fontlink: 'fa fa-soundcloud',
        newLink: ''
      },
      {
        name: 'Youtube',
        link: '#',
        fontlink: 'fa fa-youtube',
        newLink: ''
      },
      {
        name: 'Beatport',
        link: '#',
        fontlink: 'fa fa-headphones',
        newLink: ''
      }
    ]

    const socialmedia = sociallinks.map((sociallinks) =>
      <li><a href={sociallinks.link}><i className={sociallinks.fontlink} /></a></li>
    );

    return (
      <div id="tf-footer">
          <div className="container">
              <p className="pull-left">© 2017 Painting Co. All rights reserved.</p>
              <ul className="list-inline social pull-right">
                  {socialmedia} &nbsp; &nbsp;
              </ul>
          </div>
      </div>

    );
  }
});
