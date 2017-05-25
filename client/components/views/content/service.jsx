ServicePage = React.createClass ({

  render() {

    const services = [
      {
        painting: "Indoor Out-Door ",
        newCover: '',
        newBL: '',
        newYL: ''
      },
      {
        painting: " Commercial  and Personal",
        newCover: '',
        newBL: '',
        newYL: ''
      }
    ]


    const listService = services.map((services) =>
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 nopadding">
          <div className="box">
              <div className="hover-bg">
                  <div className="hover-text off">
                      <a title="Youtube"
                         href="">
                        <i className="fa fa-expand" />
                      </a>
                      <a title="Beatport"
                         href=''>
                        <i className="fa fa-chain" />
                      </a>
                  </div>
                  <img src=""
                       className="img-responsive"
                       alt="Service Cover" />
              </div>
          </div>
      </div>
    );

    return (
      <div id="tf-works">
        <div className="container">
            <div className="section-header">
                <h2> Recent  <span className="highlight"><strong>Services</strong></span></h2>
                <h5><em>Producing has been a journey</em></h5>
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
