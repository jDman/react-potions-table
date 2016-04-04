import React from 'react';

class NextBtn extends React.Component {
  constructor() {
    super();
  }

  handleClick(event) {
    event.preventDefault();

    this.props.nextPage();
  }

  render() {
    return (
      <li className="next"
          onClick={this.handleClick.bind(this)}>
        <a href="#">Next
          <span aria-hidden="true">&rarr;</span>
        </a>
      </li>
    );
  }
}

NextBtn.propTypes = { nextPage: React.PropTypes.func };

export default NextBtn;
