class PreFlop extends React.Component {
  isComplete() {
    return true;
  }

  render() {
    return (
      <React.Fragment>
        <Heading text="pre flop details" />

        <Navigation>
          <Button onClick={this.props.backPage} text="back" />
          <Button
            onClick={this.props.nextPage}
            disabled={!this.isComplete()}
            text="next"
          />
        </Navigation>
      </React.Fragment>
    )
  }
}
