Podcast = React.createClass({

  getMixPodcastUrl(){
    podcast = " chnage this url";

    return <p> podcast </p>;
  },
  render() {
    
    return <div className="podcasturl">
      {this.getMixPodcastUrl()}
    </div>;
  }
});
