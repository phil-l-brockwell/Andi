class PreFlop extends React.Component {
  isComplete() {
    return true;
  }

  render() {
    return (
      <Page
        name="pre flop"
        nextPage={this.props.nextPage}
        backPage={this.props.backPage}
        isComplete={this.isComplete.bind(this)}
      />
    );
  }
}
