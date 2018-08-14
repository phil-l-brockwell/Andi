class Heading extends React.Component {
  render() {
    return (
      <div className="row heading">
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

class Navigation extends React.Component {
  render() {
    return <div className="row navigation">{this.props.children}</div>;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pageIndex: 0,
      players: null,
      heroBigBlinds: 100,
      heroPosition: null,
      villainBigBlinds: 100,
      villainPosition: null,
      preflopCards: [
        { id: 1, rank: null, suit: null },
        { id: 2, rank: null, suit: null }
      ],
      flopCards: [
        { id: 1, rank: null, suit: null },
        { id: 2, rank: null, suit: null },
        { id: 3, rank: null, suit: null }
      ],
      turnCards: [
        { id: 1, rank: null, suit: null }
      ],
      riverCards: [
        { id: 1, rank: null, suit: null }
      ]
    };
    this.pages = [
      "home",
      "game",
      "hero",
      "villain",
      "preflop",
      "flop",
      "turn",
      "river"
    ];
    this.positions = [
      "utg",
      "utg+1",
      "utg+2",
      "utg+3",
      "lojack",
      "hijack",
      "cut off",
      "button",
      "small blind",
      "big blind"
    ];
    this.minBigBlinds = 20;
    this.maxBigBlinds = 500;
  }

  currentPage() {
    return this.pages[this.state.pageIndex];
  }

  updateField(e, field) {
    this.setState({ [field]: e.target.value });
  }

  updateCardArray(updatedArray, arrayName) {
    this.setState({ [arrayName + "Cards"]: updatedArray });
  }

  availablePositions() {
    switch (this.players) {
      default:
        return this.positions;
    }
  }

  renderPage() {
    switch (this.currentPage()) {
      case "home":
        return <Home next={this.nextPage.bind(this)} />;
      case "game":
        return (
          <Game
            players={this.state.players}
            nextPage={this.nextPage.bind(this)}
            backPage={this.backPage.bind(this)}
            updatePlayers={() => {
              this.updateField(event, "players");
            }}
          />
        );
      case "hero":
        return (
          <Hero
            positions={this.availablePositions()}
            disabledPositions={[this.state.villainPosition]}
            bigBlinds={this.state.heroBigBlinds}
            update={this.updateField.bind(this)}
            position={this.state.heroPosition}
            minBigBlinds={this.minBigBlinds}
            maxBigBlinds={this.maxBigBlinds}
            nextPage={this.nextPage.bind(this)}
            backPage={this.backPage.bind(this)}
          />
        );
      case "villain":
        return (
          <Villain
            positions={this.availablePositions()}
            disabledPositions={[this.state.heroPosition]}
            bigBlinds={this.state.villainBigBlinds}
            update={this.updateField.bind(this)}
            position={this.state.villainPosition}
            minBigBlinds={this.minBigBlinds}
            maxBigBlinds={this.maxBigBlinds}
            nextPage={this.nextPage.bind(this)}
            backPage={this.backPage.bind(this)}
          />
        );
      case "preflop":
        return (
          <Street
            name="preflop"
            nextPage={this.nextPage.bind(this)}
            backPage={this.backPage.bind(this)}
            cards={this.state.preflopCards}
            updateCardArray={this.updateCardArray.bind(this)}
          />
        );
      case "flop":
        return (
          <Street
            name="flop"
            nextPage={this.nextPage.bind(this)}
            backPage={this.backPage.bind(this)}
            cards={this.state.flopCards}
            updateCardArray={this.updateCardArray.bind(this)}
          />
        );
      case "turn":
        return (
          <Street
            name="turn"
            nextPage={this.nextPage.bind(this)}
            backPage={this.backPage.bind(this)}
            cards={this.state.turnCards}
            updateCardArray={this.updateCardArray.bind(this)}
          />
        );
      case "river":
        return (
          <Street
            name="river"
            nextPage={this.nextPage.bind(this)}
            backPage={this.backPage.bind(this)}
            cards={this.state.riverCards}
            updateCardArray={this.updateCardArray.bind(this)}
          />
        );
      default:
        return <Home next={this.nextPage.bind(this)} />;
    }
  }

  nextPage() {
    if (this.state.pageIndex === this.pages.length - 1) {
      return;
    }

    this.setState({ pageIndex: this.state.pageIndex + 1 });
  }

  backPage() {
    if (this.state.pageIndex === 0) {
      return;
    }

    this.setState({ pageIndex: this.state.pageIndex - 1 });
  }

  render() {
    return this.renderPage();
  }
}

ReactDOM.render(<App />, document.getElementById("mock-input-app"));
