class PositionButtons extends React.Component {
  render() {
    const buttons = this.props.positions.map(position => (
      <Button
        onClick={this.props.update}
        selected={this.props.selected === position}
        disabled={this.props.disabled.some(
          disabledPosition => position === disabledPosition
        )}
        value={position}
        text={position}
      />
    ));

    return <Row limit="5">{buttons}</Row>;
  }
}
