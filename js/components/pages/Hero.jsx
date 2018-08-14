class Hero extends React.Component {
  isComplete() {
    return this.props.bigBlinds && this.props.position;
  }

  render() {
    return (
      <Page
        name="hero"
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
              this.props.update(event, "heroBigBlinds");
            }}
          />
        </Row>

        <Heading text="position" />
        <PositionButtons
          disabled={this.props.disabledPositions}
          selected={this.props.position}
          positions={this.props.positions}
          update={() => {
            this.props.update(event, "heroPosition");
          }}
        />
      </Page>
    );
  }
}
