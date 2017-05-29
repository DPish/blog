ServicePage = React.createClass ({

  render() {

    const services = [
      {
        title: "residential intereior ",
        img: "http://chaichung.com/wp-content/uploads/2015/06/6028_Era_Lounge_Chair_Home_2-300x210.jpg"

      },
      {
        title: "residential exterior ",
        img: "http://www.sccci.net/wp-content/uploads/2013/04/exterior-painting-eaves.jpg"

      },
      {
        title: "commercial painting ",
        img: "http://www.rainbowpaintingservices.com/images/commercial-painters/commercial-exterior.jpg"
      }
    ]


    const listService = services.map((service) =>
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 nopadding">
          <div className="box">
              <div className="hover-bg">
                  <div className="hover-text off">
                      <a title="Youtube"
                         href="#">{service.title}
                        <i className="fa fa-expand" />
                      </a>
                      <a title="Beatport"
                         href='#'>
                        <i className="fa fa-chain" />
                      </a>
                  </div>
                  <img src={service.img}
                       className="img-responsive"
                       alt={service.title} />
              </div>
          </div>
      </div>
    );

    return (
      <div id="tf-services">
        <div className="container">
            <div className="section-header">
                <h2>Our <span className="highlight"><strong>Services</strong></span></h2>
                <h5><em>Our Services</em></h5>
            </div>
        </div>
        <div className="container-fluid">
             <div id="itemsWork" className="row text-center">
              {listService}
            </div>
        </div>
      </div>

    );
  }
});
