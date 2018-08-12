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
      heroCardOne: null,
      heroCardOneSuit: null,
      heroCardTwo: null,
      heroCardTwoSuit: null,
      heroBigBlinds: 100,
      heroPosition: null,
      villainBigBlinds: 100,
      villainPosition: null,
      villainStyle: 0
    };
    this.pages = [
      "home",
      "game",
      "hero",
      "villain",
      "preFlop",
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
            cardOne={this.state.heroCardOne}
            cardOneSuit={this.state.heroCardOneSuit}
            cardTwo={this.state.heroCardTwo}
            cardTwoSuit={this.state.heroCardTwoSuit}
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
            bigBlinds={this.state.villainBigBlinds}
            update={this.updateField.bind(this)}
            position={this.state.villainPosition}
            minBigBlinds={this.minBigBlinds}
            maxBigBlinds={this.maxBigBlinds}
            style={this.state.villainStyle}
            nextPage={this.nextPage.bind(this)}
            backPage={this.backPage.bind(this)}
          />
        );
      case "preFlop":
        return (
          <PreFlop
            nextPage={this.nextPage.bind(this)}
            backPage={this.backPage.bind(this)}
          />
        );
      case "flop":
        return (
          <Flop
            nextPage={this.nextPage.bind(this)}
            backPage={this.backPage.bind(this)}
          />
        );
      case "turn":
        return (
          <Turn
            nextPage={this.nextPage.bind(this)}
            backPage={this.backPage.bind(this)}
          />
        );
      case "river":
        return (
          <River
            nextPage={this.nextPage.bind(this)}
            backPage={this.backPage.bind(this)}
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
