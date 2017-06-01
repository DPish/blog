ServicePage = React.createClass ({

  render() {

    const services = [
      {
        title: "residential intereior ",
        img: "http://www.sccci.net/wp-content/uploads/2013/04/exterior-painting-eaves.jpg"

      },
      {
        title: "residential exterior ",
        img: "http://www.sccci.net/wp-content/uploads/2013/04/exterior-painting-eaves.jpg"

      },
      {
        title: "commercial painting ",
        img: "http://www.sccci.net/wp-content/uploads/2013/04/exterior-painting-eaves.jpg"
      }
    ]


    const listService = services.map((service) =>
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 nopadding">
          <div className="box">
              <div className="hover-bg">
                  <div className="hover-text off">
                         {service.title}
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
