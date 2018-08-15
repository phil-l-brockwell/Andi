class Card extends React.Component {
  classString() {
    var s = "card " + this.props.suit;

    if (this.props.active) {
      s += " active";
    }

    return s;
  }

  render() {
    return (
      <div
        className={this.classString()}
        onClick={() => {
          this.props.setCurrentCardId(this.props.id);
        }}
      >
        <p className="rank top">{this.props.rank}</p>
        <p className="suit">{this.props.symbol}</p>
        <p className="rank bottom">{this.props.rank}</p>
      </div>
    );
  }
}
