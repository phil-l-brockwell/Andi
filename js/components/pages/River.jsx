class River extends React.Component {
  isComplete() {
    return true;
  }

  render() {
    return (
      <Page
        name="river"
        nextPage={this.props.nextPage}
        backPage={this.props.backPage}
        isComplete={this.isComplete.bind(this)}
      />
    );
  }
}
