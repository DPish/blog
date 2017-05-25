Footer = React.createClass({


  render() {

    const sociallinks = [
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/LyandNYC/',
        fontlink: 'fa fa-facebook',
        newLink: ''
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/lyandnyc',
        fontlink: 'fa fa-twitter',
        newLink: ''
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/lyandnyc/',
        fontlink: 'fa fa-instagram',
        newLink: ''
      },
      {
        name: 'E-Mail',
        link: 'mailto:info@lyandnyc.com',
        fontlink: 'fa fa-envelope',
        newLink: ''
      },
      {
        name: 'Soundcloud',
        link: 'https://soundcloud.com/lyandnyc',
        fontlink: 'fa fa-soundcloud',
        newLink: ''
      },
      {
        name: 'Youtube',
        link: 'https://www.youtube.com/user/LyandNYC',
        fontlink: 'fa fa-youtube',
        newLink: ''
      },
      {
        name: 'Beatport',
        link: 'http://classic.beatport.com/artist/lyand/350497',
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
              <p className="pull-left">© 2017 Lyand. All rights reserved.</p>
              <ul className="list-inline social pull-right">
                  {socialmedia} &nbsp; &nbsp;
              </ul>
          </div>
      </div>

    );
  }
});
