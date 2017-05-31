JobsList = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'jobsList' );

    return {
      jobs: Jobs.find().fetch().map( ( job ) => {
        return { uid: job._id, href: `/jobs/${ job._id }/edit`, label: job.title };
      })

    };
  },
  handleNewJob() {
    Meteor.call( 'newJob', ( error, jobId ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/jobs/${ jobId }/edit` );
        Bert.alert( 'All set! Get to typin\'', 'success' );
      }
    });
  },
  renderJobsList() {
    if ( this.data.jobs.length > 0 ) {
      return <ListGroup linked={ true } items={ this.data.jobs } />;
    } else {
      return <WarningAlert>No jobs found.</WarningAlert>;
    }
  },
  render() {
    return <GridRow>
      <br />
      <br />
      <br />
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <SuccessButton type="button" label="New Job" onClick={ this.handleNewJob } />
        <PageHeader size="h4" label="Jobs" />
        { this.renderJobsList() }
      </GridColumn>
    </GridRow>;
  }
});
