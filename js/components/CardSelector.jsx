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
    this.suits = ["diamonds", "clubs", "spades", "hearts"];
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
        selected={this.props.currentCard.rank === rank}
        disabled={this.isRankDisabled(rank)}
      />
    ));

    const suitButtons = this.suits.map(suit => (
      <Button
        onClick={() => {
          this.props.update(event, "suit");
        }}
        value={suit}
        text={suit}
        selected={this.props.currentCard.suit === suit}
        disabled={this.isSuitDisabled(suit)}
      />
    ));

    return (
      <React.Fragment>
        <Row>{rankButtons}</Row>
        <Row>{suitButtons}</Row>
        <Row>
          <Button onClick={this.props.clear} text="clear" />
        </Row>
      </React.Fragment>
    );
  }
}
