class CardDisplay extends React.Component {
  render() {
    const cards = this.props.cards.map(card => (
      <Card
        suit={card.suit}
        rank={card.rank}
        active={this.props.currentCard === card}
        symbol={this.props.suits[card.suit]}
      />
    ));

    return <Row className="center-content">{cards}</Row>;
  }
}
