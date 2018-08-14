class Player extends React.Component {
  isComplete() {
    return this.props.bigBlinds && this.props.position;
  }

  render() {
    return (
      <Page
        name={this.props.name}
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
              this.props.update(event, `${this.props.name}BigBlinds`);
            }}
          />
        </Row>

        <Heading text="position" />
        <PositionButtons
          disabled={this.props.disabledPositions}
          selected={this.props.position}
          positions={this.props.positions}
          update={() => {
            this.props.update(event, `${this.props.name}Position`);
          }}
        />
      </Page>
    );
  }
}
