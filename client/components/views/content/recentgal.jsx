Recentgal = React.createClass({

  render() {

    return (
      <div className="container">
                 <h2>Carousel Example</h2>
                 <div id="myCarousel" className="carousel slide" data-ride="carousel">
                   <ol className="carousel-indicators">
                     <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                     <li data-target="#myCarousel" data-slide-to="1"></li>
                     <li data-target="#myCarousel" data-slide-to="2"></li>
                     <li data-target="#myCarousel" data-slide-to="3"></li>
                     <li data-target="#myCarousel" data-slide-to="4"></li>
                   </ol>
                   <div className="carousel-inner">
                     <div className="item active">
                       <img src="http://mommyessence.com/wp-content/uploads/2017/03/astonishing-wall-colors-for-small-rooms-favorites-ideas-interior-design-including-secret-opening.jpg" alt="Los Angeles" />
                       <div className="carousel-caption d-none d-md-block">
                          <h3> Exterior:  building painted </h3>
                          <p>
                            touched up building
                          </p>
                       </div>
                   </div>

                     <div className="item">
                       <img src="http://mommyessence.com/wp-content/uploads/2017/03/astonishing-wall-colors-for-small-rooms-favorites-ideas-interior-design-including-secret-opening.jpg" alt="Chicago"  />
                         <div className="carousel-caption d-none d-md-block">
                            <h3> Exterior:  building painted </h3>
                            <p>
                              touched up building
                            </p>
                         </div>
                   </div>

                     <div className="item">
                       <img src="http://mommyessence.com/wp-content/uploads/2017/03/astonishing-wall-colors-for-small-rooms-favorites-ideas-interior-design-including-secret-opening.jpg" alt="New york" />
                         <div className="carousel-caption d-none d-md-block">
                            <h3> Exterior:  building painted </h3>
                            <p>
                              touched up building
                            </p>
                         </div>
                    </div>

                     <div className="item">
                       <img src="http://mommyessence.com/wp-content/uploads/2017/03/astonishing-wall-colors-for-small-rooms-favorites-ideas-interior-design-including-secret-opening.jpg" alt="New york"  />
                         <div className="carousel-caption d-none d-md-block">
                            <h3> Exterior:  building painted </h3>
                            <p>
                              touched up building
                            </p>
                         </div>
                     </div>

                     <div className="item">
                       <img src="http://mommyessence.com/wp-content/uploads/2017/03/astonishing-wall-colors-for-small-rooms-favorites-ideas-interior-design-including-secret-opening.jpg" alt="New york" />
                         <div className="carousel-caption d-none d-md-block">
                            <h3> Exterior:  building painted </h3>
                            <p>
                              touched up building
                            </p>
                         </div>
                    </div>

                   </div>
                   <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                     <span className="glyphicon glyphicon-chevron-left"></span>
                     <span className="sr-only">Previous</span>
                   </a>
                   <a className="right carousel-control" href="#myCarousel" data-slide="next">
                     <span className="glyphicon glyphicon-chevron-right"></span>
                     <span className="sr-only">Next</span>
                   </a>
                 </div>
               </div>


    );
  }
});
