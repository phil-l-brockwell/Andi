class Villain extends React.Component {
  render() {
    var postionButtons = this.props.positions.map((position, i) => {
      var selected = "";
      if (this.props.position === position) {
        selected = "selected";
      }

      return (
        <button
          onClick={() => {
            this.props.update(event, "villainPosition");
          }}
          className={selected}
          value={position}
        >
          {position}
        </button>
      );
    });

    return(
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

      </React.Fragment>
    )
  }
}
