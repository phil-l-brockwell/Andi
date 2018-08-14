class Row extends React.Component {
  render() {
    if (!this.props.limit) {
      return <div className={this.classString()}>{this.props.children}</div>;
    }

    var test = React.Children.toArray(this.props.children).reduce(
      (array, child, i) => {
        const chunkIndex = Math.floor(i / this.props.limit);

        if (!array[chunkIndex]) {
          array[chunkIndex] = [];
        }

        array[chunkIndex].push(child);

        return array;
      },
      []
    );

    return (
      <React.Fragment>
        {test.map(children => <div className={this.classString()}>{children}</div>)}
      </React.Fragment>
    );
  }

  classString() {
    var s = "row ";

    if (this.props.className) {
      s += this.props.className;
    }

    return s;
  }
}
