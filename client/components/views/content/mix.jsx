Mix = React.createClass({


  render() {
    const mixUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/291363705&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";


    return (
      <div id="tf-services">
          <div className="container">

              <div className="section-header">
                  <h2>Recent <span className="highlight"><strong>Mix</strong></span></h2>
                  <h5><em>The selection will keep you coming back for more</em></h5>

              </div>

              <div className="row">

                  <div className="col-md-12">
                    <iframe width="100%" height="450" scrolling="no" frameBorder="no"
                      src={mixUrl} />


                  </div>



              </div>

          </div>
      </div>

    );
  }
});
