Post = React.createClass({
  getPostTitle() {
    let post = this.props.post;

    if ( this.props.singlePost ) {
      return <h3>{ post.title }</h3>;
    } else {
      return <h3><a href={ `/posts/${ post.slug }`}>{ post.title }</a></h3>;
    }
  },
  getHTML( markdown ) {
    if ( markdown ) {
      return { __html: parseMarkdown( markdown ) };
    }
  },
  renderTags( tags ) {
    if ( tags ) {
      return <div className="tags">
        {tags.map( ( tag ) => {
          return <a className="tag" href={ `/tags/${ tag }` }>#{ tag }</a>;
        })}
      </div>;
    }
  },

  renderImg( imgCover ) {
    var imageUrl = "#";
    if(imgCover){
      imageUrl = $.trim(imgCover);
      return <img src={ imageUrl } content="img-src data: {imageUrl}"
        height="200px" width="140px" /> ;
    }
  },


  render() {
    let { formatLastUpdate } = ReactHelpers,
        post                 = this.props.post;

    return <div className="post">
      <GridRow>
        <GridColumn className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <GridColumn className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              { this.getPostTitle() }
              <p><strong>Last Updated:</strong> { formatLastUpdate( post.updated ) }</p>
              { this.renderTags( post.tags ) }
              <div className="post-body" dangerouslySetInnerHTML={ this.getHTML( post.content ) } />
            </GridColumn>
            <GridColumn className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              { this.renderImg( post.imgUrl ) }
            </GridColumn>
          </GridColumn>
      </GridRow>
    </div>;
  }
});
