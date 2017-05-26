TestimonialPage = React.createClass ({

  render() {

    const testimonials = [
      {
        comment: "Goes beyond the job, great.. recommend  ",
        newCover: '',
        newBL: '',
        newYL: ''
      },
      {
        comment: "Great Work.. clean and neat..",
        newCover: '',
        newBL: '',
        newYL: ''
      }
    ]


    const listTestimonial = testimonials.map((testimonials) =>
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
                       alt="Testimonial Cover" />
              </div>
          </div>
      </div>
    );

    return (
      <div id="tf-works">
        <div className="container">
            <div className="section-header">
                <h2> Recent  <span className="highlight"><strong>Testimonials</strong></span></h2>
                <h5><em> Great Quality Work</em></h5>
            </div>
        </div>
        <div className="container-fluid">
             <div id="itemsWork" className="row text-center">
              {listTestimonial}
            </div>
        </div>
      </div>

    );
  }
});
