class Hero extends React.Component {
  constructor() {
    super();
    this.cards = [
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
      "K",
      "A"
    ];
    this.suits = ["♦", "♣", "♠", "♥"];
  }

  isComplete() {
    return (
      this.props.bigBlinds &&
      this.props.position &&
      this.props.cardOneRank &&
      this.props.cardOneSuit &&
      this.props.cardTwoRank &&
      this.props.cardTwoSuit
    );
  }

  render() {
    const cardOneButtons = this.cards.map(card => (
      <Button
        onClick={() => {
          this.props.update(event, "heroCardOneRank");
        }}
        value={card}
        selected={this.props.cardOneRank === card}
        text={card}
      />
    ));

    const cardTwoButtons = this.cards.map(card => (
      <Button
        onClick={() => {
          this.props.update(event, "heroCardTwoRank");
        }}
        value={card}
        selected={this.props.cardTwoRank === card}
        text={card}
      />
    ));

    const cardOneSuitButtons = this.suits.map(suit => (
      <Button
        onClick={() => {
          this.props.update(event, "heroCardOneSuit");
        }}
        value={suit}
        selected={this.props.cardOneSuit === suit}
        text={suit}
      />
    ));

    const cardTwoSuitButtons = this.suits.map(suit => (
      <Button
        onClick={() => {
          this.props.update(event, "heroCardTwoSuit");
        }}
        value={suit}
        selected={this.props.cardTwoSuit === suit}
        text={suit}
      />
    ));

    return (
      <Page
        name="hero"
        nextPage={this.props.nextPage}
        backPage={this.props.backPage}
        isComplete={this.isComplete.bind(this)}
      >
        <Heading text="big blinds" />
        <Row>
          <Slider
            value={this.props.bigBlinds}
            min={this.props.minBigBlinds}
            max={this.props.maxBigBlinds}
            update={() => {
              this.props.update(event, "heroBigBlinds");
            }}
          />
        </Row>

        <Heading text="position" />
        <PositionButtons
          disabled={this.props.disabledPositions}
          selected={this.props.position}
          positions={this.props.positions}
          update={() => {
            this.props.update(event, "heroPosition");
          }}
        />

        <Heading text="hole cards" />
        <Row>{cardOneButtons}</Row>
        <Row>{cardOneSuitButtons}</Row>
        <Row>{cardTwoButtons}</Row>
        <Row>{cardTwoSuitButtons}</Row>
      </Page>
    );
  }
}
