class CardSelector extends React.Component {
  constructor() {
    super();
    this.ranks = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    this.suits = {
      diamonds: "♦",
      spades: "♠",
      hearts: "♥",
      clubs: "♣"
    };
  }

  isRankDisabled(rank) {
    return this.props.disabledCards.some(disabledCard => {
      return (
        disabledCard.rank === rank &&
        disabledCard.suit === this.props.currentCard.suit
      );
    });
  }

  isSuitDisabled(suit) {
    return this.props.disabledCards.some(disabledCard => {
      return (
        disabledCard.suit === suit &&
        disabledCard.rank === this.props.currentCard.rank
      );
    });
  }

  render() {
    const rankButtons = this.ranks.map(rank => (
      <Button
        onClick={() => {
          this.props.update(event, "rank");
        }}
        value={rank}
        text={rank}
        disabled={this.isRankDisabled(rank)}
      />
    ));

    const suitButtons = Object.keys(this.suits).map((suit, symbol) => (
      <Button
        onClick={() => {
          this.props.update(event, "suit");
        }}
        value={suit}
        text={this.suits[suit]}
        disabled={this.isSuitDisabled(suit)}
        className="suit-selector"
      />
    ));

    return (
      <React.Fragment>
        <Row>{rankButtons}</Row>
        <Row>{suitButtons}</Row>
        <Row>
          <Button
            onClick={this.props.clear}
            text="clear"
            disabled={!this.props.isCardsArrayDirty}
            className="clear"
          />
        </Row>
      </React.Fragment>
    );
  }
}
