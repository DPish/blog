ReleasePage = React.createClass ({

  render() {

    const gallaries = [
      {

        cover: 'http://mommyessence.com/wp-content/uploads/2017/03/astonishing-wall-colors-for-small-rooms-favorites-ideas-interior-design-including-secret-opening.jpg',
        beatportLink: 'http://classic.beatport.com/track/people-original-mix/9021613',
        youtubeLink: 'https://www.youtube.com/watch?v=xdQ3EojBki4&list=PLFhOLY5Spt2_fVnR3cMoBqBnLdLocceTS',
        newCover: '',
        newBL: '',
        newYL: ''
      },
      {
        cover: 'http://mommyessence.com/wp-content/uploads/2017/03/astonishing-wall-colors-for-small-rooms-favorites-ideas-interior-design-including-secret-opening.jpg',
        beatportLink: 'http://classic.beatport.com/track/take-control-original-mix/8796856',
        youtubeLink: 'https://www.youtube.com/watch?v=CPsO3-UOv2k&list=PLFhOLY5Spt2_fVnR3cMoBqBnLdLocceTS&index=2',
        newCover: '',
        newBL: '',
        newYL: ''
      },
      {
        cover: 'http://mommyessence.com/wp-content/uploads/2017/03/astonishing-wall-colors-for-small-rooms-favorites-ideas-interior-design-including-secret-opening.jpg',
        beatportLink: 'http://classic.beatport.com/track/lost-call-original-mix/7795653',
        youtubeLink: 'https://www.youtube.com/watch?v=qMT5jviDESA&list=PLFhOLY5Spt2_fVnR3cMoBqBnLdLocceTS&index=3',
        newCover: '',
        newBL: '',
        newYL: ''
      },
      {
        cover: 'http://mommyessence.com/wp-content/uploads/2017/03/astonishing-wall-colors-for-small-rooms-favorites-ideas-interior-design-including-secret-opening.jpg',
        beatportLink: 'http://classic.beatport.com/release/get-down/1926253',
        youtubeLink: 'https://www.youtube.com/watch?v=wU-9PBngMtI&index=6&list=PLFhOLY5Spt2_fVnR3cMoBqBnLdLocceTS',
        newCover: '',
        newBL: '',
        newYL: ''
      },
      {
        cover: 'http://mommyessence.com/wp-content/uploads/2017/03/astonishing-wall-colors-for-small-rooms-favorites-ideas-interior-design-including-secret-opening.jpg',
        beatportLink: 'http://classic.beatport.com/release/xone-ep/1562453',
        youtubeLink: 'https://www.youtube.com/watch?v=mRo1LpthNv8&index=4&list=PLFhOLY5Spt2_fVnR3cMoBqBnLdLocceTS',
        newCover: '',
        newBL: '',
        newYL: ''
      },
      {
        cover: 'http://mommyessence.com/wp-content/uploads/2017/03/astonishing-wall-colors-for-small-rooms-favorites-ideas-interior-design-including-secret-opening.jpg',
        beatportLink: 'http://classic.beatport.com/track/ozone-original-mix/6895595',
        youtubeLink: 'https://www.youtube.com/watch?v=Wb8F3r-doV4&index=8&list=PLFhOLY5Spt2_fVnR3cMoBqBnLdLocceTS',
        newCover: '',
        newBL: '',
        newYL: ''
      },
      {
        cover: 'http://mommyessence.com/wp-content/uploads/2017/03/astonishing-wall-colors-for-small-rooms-favorites-ideas-interior-design-including-secret-opening.jpg',
        beatportLink: 'http://classic.beatport.com/release/natural-vibe-ep/1385667',
        youtubeLink: 'https://www.youtube.com/watch?v=872Wtj5WQjw&index=9&list=PLFhOLY5Spt2_fVnR3cMoBqBnLdLocceTS',
        newCover: '',
        newBL: '',
        newYL: ''
      },
      {
        cover: 'http://mommyessence.com/wp-content/uploads/2017/03/astonishing-wall-colors-for-small-rooms-favorites-ideas-interior-design-including-secret-opening.jpg',
        beatportLink: 'http://classic.beatport.com/track/avenue-x-original-mix/4954698',
        youtubeLink: 'https://www.youtube.com/watch?v=lMr1JKB_lHw&index=11&list=PLFhOLY5Spt2_fVnR3cMoBqBnLdLocceTS',
        newCover: '',
        newBL: '',
        newYL: ''
      }
    ]

    const listGallery = gallaries.map((gallary) =>
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 nopadding">
          <div className="box">
              <div className="hover-bg">
                  <div className="hover-text off">
                      <a title="Youtube"
                         href={gallary.youtubeLink}>
                        <i className="fa fa-expand" />
                      </a>
                      <a title="Beatport"
                         href={gallary.beatportLink}>
                        <i className="fa fa-chain" />
                      </a>
                  </div>
                  <img src={gallary.cover}
                       className="img-responsive"
                       alt="Release Cover" />
              </div>
          </div>
      </div>
    );

    return (
      <div id="tf-gallery">
        <div className="container">
            <div className="section-header">
                <h2> Recent  <span className="highlight"><strong>Gallery</strong></span></h2>
                <h5><em>Our Journey</em></h5>
            </div>
        </div>
        <div className="container-fluid">
             <div id="itemsWork" className="row text-center">
              {listGallery}
            </div>
        </div>
      </div>

    );
  }
});
