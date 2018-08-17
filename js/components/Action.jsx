class Action extends React.Component {
  constructor() {
    super();
    this.options = ["call", "raise", "fold"];
  }

  render() {
    const options = this.options.map(option => (
      <Button
        text={option}
        selected={this.props.type === option}
        onClick={this.props.update}
        value={option}
      />
    ));

    return (
      <Row>
        <Label text={this.props.position} />
        {options}
      </Row>
    );
  }
}
