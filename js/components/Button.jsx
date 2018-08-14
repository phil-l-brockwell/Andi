class Button extends React.Component {
  render() {
    return (
      <button
        className={this.classString()}
        onClick={this.onClickEvent()}
        value={this.props.value}
      >
        {this.props.text}
      </button>
    );
  }

  onClickEvent() {
    if (this.props.disabled) {
      return;
    }

    return this.props.onClick;
  }

  classString() {
    var s = this.props.className;

    if (this.props.disabled) {
      s += " disabled";
    }

    if (this.props.selected) {
      s += " selected";
    }

    return s;
  }
}
