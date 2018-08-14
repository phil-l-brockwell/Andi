class Street extends React.Component {
  isComplete() {
    return this.props.cards.every(card => card.rank && card.suit);
  }

  lastCard() {
    return this.props.cards.slice(-1)[0];
  }

  isCardsArrayDirty() {
    return this.props.cards.some(card => {
      return (
        card.rank || card.suit
      );
    });
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

  cardsHeading() {
    var s = "card";

    if (this.props.cards.length > 1) {
      s += "s";
    }

    return s;
  }

  render() {
    return (
      <Page
        name={this.props.name}
        nextPage={this.props.nextPage}
        backPage={this.props.backPage}
        isComplete={this.isComplete.bind(this)}
      >
        <Heading text={this.cardsHeading()} />
        <CardSelector
          update={this.updateCard.bind(this)}
          clear={this.clearCards.bind(this)}
          disabledCards={this.props.selectedCards}
          currentCard={this.currentCard()}
          isCardsArrayDirty={this.isCardsArrayDirty()}
          cards={this.props.cards}
        />
      </Page>
    );
  }
}
