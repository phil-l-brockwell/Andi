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
      this.props.cardOne &&
      this.props.cardOneSuit &&
      this.props.cardTwo &&
      this.props.cardTwoSuit
    );
  }

  render() {
    const cardOneButtons = this.cards.map(card => (
      <Button
        onClick={() => {
          this.props.update(event, "heroCardOne");
        }}
        value={card}
        selected={this.props.cardOne === card}
        text={card}
      />
    ));

    const cardTwoButtons = this.cards.map(card => (
      <Button
        onClick={() => {
          this.props.update(event, "heroCardTwo");
        }}
        value={card}
        selected={this.props.cardTwo === card}
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

    const postionButtons = this.props.positions.map(position => (
      <Button
        onClick={() => {
          this.props.update(event, "heroPosition");
        }}
        selected={this.props.position === position}
        value={position}
        text={position}
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
        <Row limit="5">{postionButtons}</Row>

        <Heading text="hole cards" />
        <Row>{cardOneButtons}</Row>
        <Row>{cardOneSuitButtons}</Row>
        <Row>{cardTwoButtons}</Row>
        <Row>{cardTwoSuitButtons}</Row>
      </Page>
    );
  }
}
