class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <button onClick={this.props.next}>Review a Hand</button>
        </Row>

        <Row>
          <button className="disabled">Hand History</button>
        </Row>

        <Row>
          <button className="disabled">Settings</button>
        </Row>
      </React.Fragment>
    );
  }
}
