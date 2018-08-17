class Page extends React.Component {
  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this);
    this.backPage = this.backPage.bind(this);
  }

  render() {
    return (
      <div id="display" className="display">
        <Heading text={this.props.name + " details"} />

        {this.props.children}

        <Navigation>
          <Button onClick={this.backPage} text="back" />
          <Button
            onClick={this.nextPage}
            disabled={!this.props.isComplete()}
            text="next"
          />
        </Navigation>
      </div>
    );
  }

  nextPage() {
    document.getElementById('display').scrollTo(0,0);
    this.props.nextPage();
  }

  backPage() {
    document.getElementById('display').scrollTo(0,0);
    this.props.backPage();
  }
}
