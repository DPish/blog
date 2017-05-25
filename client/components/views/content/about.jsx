About = React.createClass({
  render() {
    const bio = "Lyand (born in Moscow, Russia) is a Brooklyn Minimal Tech producer and DJ. He is best known for\
                Groovy Sound that keeps the party in motion and the crowd on the dance floor. A recent review said\
                it best, 'Moscow bred him, NY raised him'. It takes specific elements to create a 'Vibe' and Lyand\
                has been experimenting with different styles in the playgrounds of New York City for years. When it\
                comes to music production Lyand always tries to taking the power of technology to the next level by\
                combining analog and digital worlds to develop his sound. \n \n Lyand has already released his work on\
                labels such as Tip Tap, Not For Us, Patent Skillz, Monique Speciale and Baroque. He is also known as\
                the manager and one of the co-founders of Elastic Beatz, where he is on a constant search for new\
                and innovating DJs and Producers. So far the label’s releases has gotten notice from heavy hits such\
                as Marco Carola, Paco Osuna, Claude Von Stroke, Sam Paganini, David Herrero, Anderson Noise, Mario\
                Biani, Stefny, and the list goes on."

    return (
      <div id="tf-about">
          <div className="container">
              <div className="section-header">
                  <h2>Know <span className="highlight"><strong>About</strong></span></h2>
                  <h5><em>The story of the creater</em></h5>
              </div>
          </div>

          <div className="gray-bg">

              <div className="container">
                  <div className="row">

                      <div className="col-md-6">
                          <div className="about-left-content text-center">
                              <div className="img-wrap">
                                  <div className="profile-img">
                                      <img src="../img/bio.jpg" className="img-responsive" alt="Bio" />

                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-5">
                          <div className="about-right-content display-linebreak">
                              <p>{bio}</p>
                          </div>
                      </div>

                  </div>
              </div>

          </div>
      </div>

    );
  }
});
