class Street extends React.Component {
  isComplete() {
    return this.props.cards.every(card => card.rank && card.suit);
  }

  lastCard() {
    return this.props.cards.slice(-1)[0];
  }

  currentCard() {
    return (
      this.props.cards.find(card => {
        return !card.rank || !card.suit;
      }) || this.lastCard()
    );
  }

  clearCards() {
    const updatedArray = this.props.cards.map(card => ({
      id: card.id,
      rank: null,
      suit: null
    }));

    this.props.updateCardArray(updatedArray, this.props.name);
  }

  updateCard(event, field) {
    const updatedCard = this.currentCard();
    updatedCard[field] = event.target.value;
    var updatedArray = this.props.cards.slice();

    const updatedCardIndex = updatedArray.findIndex(card => {
      return card.id == updatedCard.id;
    });

    updatedArray.splice(updatedCardIndex, 1, updatedCard);

    this.props.updateCardArray(updatedArray, this.props.name);
  }

  render() {
    return (
      <Page
        name={this.props.name}
        nextPage={this.props.nextPage}
        backPage={this.props.backPage}
        isComplete={this.isComplete.bind(this)}
      >
        <Heading text="card" />
        <Cards cards={this.props.cards} />
        <CardSelector
          update={this.updateCard.bind(this)}
          clear={this.clearCards.bind(this)}
        />
      </Page>
    );
  }
}
