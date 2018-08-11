class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Button onClick={this.props.next} text="Review a Hand" />
        </Row>

        <Row>
          <Button disabled="true" text="Hand History" />
        </Row>

        <Row>
          <Button disabled="true" text="Settings" />
        </Row>
      </React.Fragment>
    );
  }
}
