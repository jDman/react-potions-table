import React from 'react';

class PrevBtn extends React.Component {
  constructor() {
    super();
  }

  handleClick(event) {
    this.props.prevPage();
  }

  render() {
    return (
      <button className="btn btn-default"
              type="button"
              onClick={this.handleClick.bind(this)}
              >Previous</button>
    );
  }
}

export default PrevBtn;
