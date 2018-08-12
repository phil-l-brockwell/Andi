class Page extends React.Component {
  render() {
    return (
      <div className="display">
        <Heading text={this.props.name + " details"} />

        {this.props.children}

        <Navigation>
          <Button onClick={this.props.backPage} text="back" />
          <Button
            onClick={this.props.nextPage}
            disabled={!this.props.isComplete()}
            text="next"
          />
        </Navigation>
      </div>
    );
  }
}
