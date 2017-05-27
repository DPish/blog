About = React.createClass({
  render() {
    const bio = "We focus first and foremost on the customer experience. We want our customers to remember\
                us as one of the best interactions they have ever had with a home service company!\
                 Our goal is to exceed your expectations, work with flexibility around your schedule, \
                 and meet your needs with professionalism and excellence."

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
                                      <img src="http://austinhousepaintingpros.com/wp-content/uploads/2010/12/house_painting_austin.jpg" className="img-responsive" alt="Bio" />

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
