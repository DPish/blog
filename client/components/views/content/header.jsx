
Header = React.createClass({
  render() {
    return (
      <div id="tf-home" className="parallax">
          <div className="bcg"
              data-center="background-position: 50% 0px;"
              data-top-bottom="background-position: 50% -300px;"
              data-bottom-top="background-position: 50% 300px;"
              data-anchor-target="#tf-home">

              <div className="homeSlide">
                  <div className="container">
                      <div className="content-heading text-center col-md-8 col-md-offset-2">
                          <h1>Lyand</h1>
                          <p className="lead">Music Producer, Label Director,
                            Sound Engineer, Musician, and DJ are a few of
                            many words that can be used to describe him.</p>
                          <a href="#tf-works" className="scroll goto-btn text-uppercase">Check Out Releases</a>
                      </div>

                  </div>
              </div>

          </div>
      </div>

    );
  }
});
