class Villain extends React.Component {
  isComplete() {
    return this.props.position && this.props.bigBlinds;
  }

  render() {
    const postionButtons = this.props.positions.map(position => (
      <Button
        onClick={() => {
          this.props.update(event, "villainPosition");
        }}
        selected={this.props.position === position}
        value={position}
        text={position}
      />
    ));

    return (
      <React.Fragment>
        <Heading text="villain details" />

        <Heading text="big blinds" />
        <Row>
          <Slider
            value={this.props.bigBlinds}
            min={this.props.minBigBlinds}
            max={this.props.maxBigBlinds}
            update={() => {
              this.props.update(event, "villainBigBlinds");
            }}
          />
        </Row>

        <Heading text="position" />
        <Row limit="5">{postionButtons}</Row>

        <Navigation>
          <Button onClick={this.props.backPage} text="back" />
          <Button
            onClick={this.props.nextPage}
            disabled={!this.isComplete()}
            text="next"
          />
        </Navigation>
      </React.Fragment>
    );
  }
}
