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

  render() {
    var cardOneButtons = this.cards.map((card, i) => {
      var selected = "";
      if (this.props.cardOne === card) {
        selected = "selected";
      }

      return (
        <button
          onClick={() => {
            this.props.update(event, "heroCardOne");
          }}
          value={card}
          className={selected}
        >
          {card}
        </button>
      );
    });

    var cardTwoButtons = this.cards.map((card, i) => {
      var selected = "";
      if (this.props.cardTwo === card) {
        selected = "selected";
      }

      return (
        <button
          onClick={() => {
            this.props.update(event, "heroCardTwo");
          }}
          value={card}
          className={selected}
        >
          {card}
        </button>
      );
    });

    var cardOneSuitButtons = this.suits.map((suit, i) => {
      var selected = "";
      if (this.props.cardOneSuit === suit) {
        selected = "selected";
      }

      return (
        <button
          onClick={() => {
            this.props.update(event, "heroCardOneSuit");
          }}
          value={suit}
          className={selected}
        >
          {suit}
        </button>
      );
    });

    var cardTwoSuitButtons = this.suits.map((suit, i) => {
      var selected = "";
      if (this.props.cardTwoSuit === suit) {
        selected = "selected";
      }

      return (
        <button
          onClick={() => {
            this.props.update(event, "heroCardTwoSuit");
          }}
          value={suit}
          className={selected}
        >
          {suit}
        </button>
      );
    });

    var postionButtons = this.props.positions.map((position, i) => {
      var selected = "";
      if (this.props.position === position) {
        selected = "selected";
      }

      return (
        <button
          onClick={() => {
            this.props.update(event, "heroPosition");
          }}
          className={selected}
          value={position}
        >
          {position}
        </button>
      );
    });

    return (
      <React.Fragment>
        <Heading text="hero details" />

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
      </React.Fragment>
    );
  }
}
