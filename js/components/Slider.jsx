class Slider extends React.Component {
  minusValue() {
    const value = parseInt(this.props.value);
    if (value === this.props.min) {
      return this.props.min;
    }

    return parseInt(this.props.value) - 1;
  }

  plusValue() {
    const value = parseInt(this.props.value);
    if (value === this.props.max) {
      return this.props.max;
    }

    return parseInt(this.props.value) + 1;
  }

  render() {
    return (
      <div className="slider">
        <button value={this.minusValue()} onClick={this.props.update}>
          -
        </button>
        <span>{this.props.value}</span>
        <input
          type="range"
          min={this.props.min}
          max={this.props.max}
          value={this.props.value}
          onChange={this.props.update}
        />
        <button value={this.plusValue()} onClick={this.props.update}>
          +
        </button>
      </div>
    );
  }
}
