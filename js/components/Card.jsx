class Card extends React.Component {
  constructor() {
    super();
    this.suitSymbols = {
      diamonds: "♦",
      spades: "♠",
      hearts: "♥",
      clubs: "♣"
    };
  }

  classString() {
    var s = "card " + this.props.suit;

    if (this.props.active) {
      s += " active";
    }

    return s;
  }

  render() {
    return (
      <div className={this.classString()}>
        <p className="rank top">{this.props.rank}</p>
        <p className="suit">{this.suitSymbols[this.props.suit]}</p>
        <p className="rank bottom">{this.props.rank}</p>
      </div>
    );
  }
}
