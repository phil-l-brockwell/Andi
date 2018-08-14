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

  render() {
    return (
      <div className={"card " + this.props.suit}>
        <p className="rank top">{this.props.rank}</p>
        <p className="suit">{this.suitSymbols[this.props.suit]}</p>
        <p className="rank bottom">{this.props.rank}</p>
      </div>
    );
  }
}
