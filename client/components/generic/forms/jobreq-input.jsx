JobreqInput = React.createClass({
  render() {
    return <FormControl
      ref={ this.props.ref }
      showLabel={ this.props.showLabel }
      style="input"
      name="jobReq"
      type="string"
      label="Job Request"
    />;
  }
});
