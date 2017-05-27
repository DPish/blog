
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
                          <h1>Brooklyn Painting Comp.</h1>
                          <p className="lead">Profesional Painters, for you residential or commercial projects</p>
                          <a href="#tf-works" className="scroll goto-btn text-uppercase">Check Out Gallery</a>
                      </div>

                  </div>
              </div>

          </div>
      </div>

    );
  }
});
