Recentwork = React.createClass ({

  render() {

    const recentjobs = [
      {
        img: '../ri1.jpg',
        job: 'Exterior:  building painted',
        content: 'touched up building'
      },
      {
        img: '../ri4.jpeg',
        job: 'Exterior:  building painted',
        content: 'touched up building'
      },
      {
        img: '../ri2.jpg',
        job: 'Exterior:  building painted',
        content: 'touched up building'
      },
      {
        img: '../ri3.jpg',
        job: 'Exterior:  building painted',
        content: 'touched up building'
      },
      {
        img: '../ri5.jpeg',
        job: 'Exterior:  building painted',
        content: 'touched up building'
      },
      {
        img: '../ri6.jpg',
        job: 'Exterior:  building painted',
        content: 'touched up building'
      },
      {
        img: 'http://mommyessence.com/wp-content/uploads/2017/03/astonishing-wall-colors-for-small-rooms-favorites-ideas-interior-design-including-secret-opening.jpg',
        job: 'Exterior:  building painted',
        content: 'touched up building'
      },
      {
        img: 'http://mommyessence.com/wp-content/uploads/2017/03/astonishing-wall-colors-for-small-rooms-favorites-ideas-interior-design-including-secret-opening.jpg',
        job: 'Exterior:  building painted',
        content: 'touched up building'
      }
    ]

    const listRecentjob = recentjobs.map((recentjob) =>
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 nopadding">
          <div className="box">
              <div className="hover-bg">
                  <h4> {recentjob.job} </h4>
                  <img src={recentjob.img}
                       className="img-responsive"
                       alt={recentjob.job}
                  />
                  <p> {recentjob.content} </p>

              </div>
          </div>
      </div>
    );

    return (
      <div id="tf-recent">
        <div className="container">
            <div className="section-header">
                <h2> Recent  <span className="highlight"><strong>Jobs</strong></span></h2>
                <h5><em>Our Journey</em></h5>
            </div>
        </div>
        <div className="container-fluid">
             <div id="itemsWork" className="row text-center">
              {listRecentjob}
            </div>
        </div>
      </div>

    );
  }
});
