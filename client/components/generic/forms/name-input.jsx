NameInput = React.createClass({
  render() {
    return <FormControl
      ref={ this.props.ref }
      showLabel={ this.props.showLabel }
      style="input"
      name="name"
      type="string"
      label="Name"
    />;
  }
});
