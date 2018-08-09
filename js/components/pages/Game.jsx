class Game extends React.Component {
  constructor() {
    super();
    this.maxPlayers = 10;
    this.minPlayers = 6;
  }

  updateField(e, field) {
    this.setState({ [field]: e.target.value });
  }

  render() {
    var playerButtons = [];

    for (var i = this.maxPlayers; i >= this.minPlayers; i--) {
      var selected = "";
      if (parseInt(this.props.players) === i) {
        selected = "selected";
      }

      var button = (
        <button
          value={i}
          onClick={this.props.updatePlayers}
          className={selected}
        >
          {i}
        </button>
      );
      playerButtons.push(button);
    }

    return (
      <React.Fragment>
        <Heading text="game details" />

        <Heading text="type" />
        <Row>
          <button className="selected">cash</button>
          <button className="disabled">tournament</button>
        </Row>

        <Heading text="players" />
        <Row>{playerButtons}</Row>
      </React.Fragment>
    );
  }
}
