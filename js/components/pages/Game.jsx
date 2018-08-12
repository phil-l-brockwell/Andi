class Game extends React.Component {
  constructor() {
    super();
    this.maxPlayers = 10;
    this.minPlayers = 6;
  }

  isComplete() {
    return this.props.players;
  }

  render() {
    var playerButtons = [];

    for (var i = this.maxPlayers; i >= this.minPlayers; i--) {
      playerButtons.push(
        <Button
          value={i}
          onClick={this.props.updatePlayers}
          selected={parseInt(this.props.players) === i}
          text={i}
        />
      );
    }

    return (
      <Page
        name="game"
        backPage={this.props.backPage}
        nextPage={this.props.nextPage}
        isComplete={this.isComplete.bind(this)}
      >
        <Heading text="type" />
        <Row>
          <Button text="cash" selected="true" />
          <Button text="tournament" disabled="true" />
        </Row>

        <Heading text="players" />
        <Row>{playerButtons}</Row>
      </Page>
    );
  }
}
