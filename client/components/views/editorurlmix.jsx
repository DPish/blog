Editor = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'editor', this.props.podcast );

    return {
      podcast: Podcasts.findOne( { _id: this.props.podcast } )
    };
  },
  validations() {
    let component = this;

    return {
      rules: {
        podcastTitle: {
          required: true
        }
      },
      messages: {
        podcastTitle: {
          required: "Hang on there, a podcast title is required!"
        }
      },
      submitHandler() {
        let { getValue, isChecked } = ReactHelpers;

        let form = component.refs.editPodcastForm.refs.form,
            podcast = {
              _id: component.props.podcast,
              artist: getValue( form, '[name="podcastArtist"]' ),
              slug: getValue( form, '[name="podcastSlug"]' ),
              url: getValue( form, '[name="podcastUrl"]' ),
            };

        Meteor.call( 'savePodcast', podcast, ( error, response ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            Bert.alert( 'Podcast saved!', 'success' );
          }
        });
      }
    };
  },
  generateSlug( event ) {
    let { setValue } = ReactHelpers,
        form         = this.refs.editPodcastForm.refs.form,
        title        = event.target.value;

    setValue( form, '[name="podcastSlug"]', getSlug( title, { custom: { "'": "" } } ) );
  },
  getLastUpdate() {
    if ( this.data ) {
      let { formatLastUpdate } = ReactHelpers,
          podcast                 = this.data.podcast;

      return `${ formatLastUpdate( podcast.updated ) } by ${ podcast.author }`;
    }
  },
  getTags() {
    let podcast = this.data.podcast;

    if ( podcast && podcast.tags ) {
      return podcast.tags.join( ', ' );
    }
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  removePodcast(e){
        e.preventDefault();
        Meteor.call('Podcast.remove',this.props.podcast);
    },
  render() {
    if ( !this.data.podcast ) { return <div />; }

    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <PageHeader size="h4" label="Edit Podcast" />
          <DangerButton onClick={this.removePodcast} label="Delete Podcast" />
        <Form ref="editPodcastForm" id="edit-podcast" className="edit-podcast" validations={ this.validations() } onSubmit={ this.handleSubmit }>
          <p className="updated-date">
            <strong>Last Updated:</strong> { this.getLastUpdate() }
          </p>

          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="podcastTitle"
              label="Title"
              onChange={ this.generateSlug }
              defaultValue={ this.data.podcast && this.data.podcast.title }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              disabled={ true }
              showLabel={ false }
              style="input"
              type="text"
              name="podcastSlug"
              label="Slug"
              defaultValue={ this.data.podcast && this.data.podcast.slug }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              showLabel={ false }
              style="textarea"
              name="podcastContent"
              label="Content"
              defaultValue={ this.data.podcast && this.data.podcast.content }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="podcastTags"
              label="Tags"
              defaultValue={ this.getTags() }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              style="input"
              type="text"
              name="podcastImg"
              label="Img"
              defaultValue= { this.data.podcast && this.data.podcast.img}
            />
          </FormGroup>

          <FormGroup>
            <SuccessButton type="submit" label="Save Podcast" />
          </FormGroup>




        </Form>
      </GridColumn>
    </GridRow>;
  }
});
