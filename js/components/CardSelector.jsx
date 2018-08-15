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
    return (
      this.props.disabledCards.some(disabledCard => {
        return (
          disabledCard.rank === rank &&
          disabledCard.suit === this.props.currentCard.suit
        );
      }) ||
      this.props.disabledCards.reduce((n, disabledCard) => {
        return n + (disabledCard.rank === rank);
      }, 0) === Object.keys(this.suits).length
    );
  }

  isSuitDisabled(suit) {
    return (
      this.props.disabledCards.some(disabledCard => {
        return (
          disabledCard.suit === suit &&
          disabledCard.rank === this.props.currentCard.rank
        );
      }) ||
      this.props.disabledCards.reduce((n, disabledCard) => {
        return n + (disabledCard.suit === suit);
      }, 0) === this.ranks.length
    );
  }

  render() {
    const rankButtons = this.ranks.map(rank => {
      if (!this.isRankDisabled(rank)) {
        return (
          <Button
            onClick={() => {
              this.props.update(event, "rank");
            }}
            value={rank}
            text={rank}
          />
        );
      }
    });

    const suitButtons = Object.keys(this.suits).map(suit => {
      if (!this.isSuitDisabled(suit)) {
        return (
          <Button
            onClick={() => {
              this.props.update(event, "suit");
            }}
            value={suit}
            text={this.suits[suit]}
            className="suit-selector"
          />
        );
      }
    });

    return (
      <React.Fragment>
        <CardDisplay
          cards={this.props.cards}
          currentCard={this.props.currentCard}
          suits={this.suits}
          setCurrentCardId={this.props.setCurrentCardId}
        />
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
