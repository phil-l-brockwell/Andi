class Flop extends React.Component {
  isComplete() {
    return true;
  }

  render() {
    return (
      <Page
        name="flop"
        backPage={this.props.backPage}
        nextPage={this.props.nextPage}
        isComplete={this.isComplete.bind(this)}
      />
    );
  }
}
