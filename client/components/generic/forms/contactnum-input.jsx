ContactnumInput = React.createClass({
  render() {
    return <FormControl
      ref={ this.props.ref }
      showLabel={ this.props.showLabel }
      style="input"
      name="contactnum"
      type="string"
      label="contactnum"
    />;
  }
});
