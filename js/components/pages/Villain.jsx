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
      <Page
        name="villian"
        nextPage={this.props.nextPage}
        backPage={this.props.backPage}
        isComplete={this.isComplete.bind(this)}
      >
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
      </Page>
    );
  }
}
