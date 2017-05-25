ReleaseEditor = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'releaseeditor', this.props.release );

    return {
      release: Releases.findOne( { _id: this.props.release } )
    };
  },
  validations() {
    let component = this;

    return {
      rules: {
        releaseTitle: {
          required: true
        }
      },
      messages: {
        releaseTitle: {
          required: "Hang on there, a release title is required!"
        }
      },
      submitHandler() {
        let { getValue, isChecked } = ReactHelpers;

        let form = component.refs.editReleaseForm.refs.form,
            release = {
              _id: component.props.release,
              title: getValue( form, '[name="releaseTitle"]' ),
              label: getValue( form, '[name="releaseLabel"]' ),
              bio: getValue( form, '[name="releaseBio"]' ),
              beatport: getValue( form, '[name="releaseBeatport"]' ),
              coverimg: getValue( form, '[name="releaseCover"]' ),
              slug: getValue( form, '[name="releaseSlug"]' ),
            };

        Meteor.call( 'saveRelease', release, ( error, response ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            Bert.alert( 'Release saved!', 'success' );
          }
        });
      }
    };
  },
  generateSlug( event ) {
    let { setValue } = ReactHelpers,
        form         = this.refs.editReleaseForm.refs.form,
        title        = event.target.value;

    setValue( form, '[name="releaseSlug"]', getSlug( title, { custom: { "'": "" } } ) );
  },
  getLastUpdate() {
    if ( this.data ) {
      let { formatLastUpdate } = ReactHelpers,
          release                 = this.data.release;

      return `${ formatLastUpdate( release.updated ) }`;
    }
  },
  handleRemoveRelease(e) {
    e.preventDefault();

    Meteor.call( 'removeRelease', this.data.release._id);
  },

  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    if ( !this.data.release ) { return <div />; }

    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <PageHeader size="h4" label="Edit Release" />
        <Form ref="editReleaseForm" id="edit-release" className="edit-release" validations={ this.validations() } onSubmit={ this.handleSubmit }>
          <p className="updated-date">
            <strong>Last Updated:</strong> { this.getLastUpdate() }
          </p>
          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="releaseTitle"
              label="Release Title"
              onChange={ this.generateSlug }
              defaultValue={ this.data.release && this.data.release.title }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="releaseLabel"
              label="Label Name"
              defaultValue={ this.data.release && this.data.release.label }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="releaseBio"
              label="Bio"
              defaultValue={ this.data.release && this.data.release.bio }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="releaseBeatport"
              label="Mix Url"
              defaultValue={ this.data.release && this.data.release.beatport }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="releaseCover"
              label="Release Cover"
              defaultValue={ this.data.release && this.data.release.coverimg }
            />
          </FormGroup>

          <FormGroup>
            <FormControl
              disabled={ true }
              showLabel={ false }
              style="input"
              type="text"
              name="releaseSlug"
              label="Slug"
              defaultValue={ this.data.release && this.data.release.slug }
            />
          </FormGroup>
          <FormGroup>
            <SuccessButton type="submit" label="Save Release" />
          </FormGroup>
          <FormGroup>
            <Button onClick={ this.handleRemoveRelease } label="Delete" />
          </FormGroup>

        </Form>
      </GridColumn>
    </GridRow>;
  }
});
