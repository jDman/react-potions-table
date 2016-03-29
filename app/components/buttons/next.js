import React from 'react';

class NextBtn extends React.Component {
  constructor() {
    super();
  }

  handleClick(event) {
    this.props.nextPage();
  }

  render() {
    return (
      <button className="btn btn-default"
              type="button"
              onClick={this.handleClick.bind(this)}
              >Next</button>
    );
  }
}

export default NextBtn;
