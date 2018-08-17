class ActionDisplay extends React.Component {
  constructor() {
    super();
    this.updateActionForPosition = this.updateActionForPosition.bind(this);
  }

  updateActionForPosition(e, position) {
    const index = this.props.actions.findIndex(action => {
      return action.position === position;
    });

    var updatedArray = this.props.actions.slice();
    var updatedAction = updatedArray[index];
    updatedAction.type = e.target.value;
    updatedArray.splice(index, 1, updatedAction);
    this.props.updateActions(updatedArray);
  }

  render() {
    const actions = this.props.actions.map(action => (
      <Action
        position={action.position}
        type={action.type}
        bet={action.bet}
        update={() => {
          this.updateActionForPosition(event, action.position);
        }}
      />
    ));

    return <React.Fragment>{actions}</React.Fragment>;
  }
}
