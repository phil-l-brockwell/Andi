class CardSelector extends React.Component {
  constructor() {
    super();
    this.cards = [
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

  render() {
    const cardOneRankButtons = this.cards.map(card => (
      <Button
        onClick={() => {
          this.props.update(event, "rank");
        }}
        value={card}
        text={card}
      />
    ));

    const cardOneSuitButtons = this.suits.map(suit => (
      <Button
        onClick={() => {
          this.props.update(event, "suit");
        }}
        value={suit}
        text={suit}
      />
    ));

    return (
      <React.Fragment>
        <Row>{cardOneRankButtons}</Row>
        <Row>{cardOneSuitButtons}</Row>
        <Row>
          <Button onClick={this.props.clear} text="clear" />
        </Row>
      </React.Fragment>
    );
  }
}
