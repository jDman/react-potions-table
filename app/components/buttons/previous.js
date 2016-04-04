import React from 'react';

class PrevBtn extends React.Component {
  constructor() {
    super();
  }

  handleClick(event) {
    event.preventDefault();

    this.props.prevPage();
  }

  render() {
    return (
      <li className="previous"
          onClick={this.handleClick.bind(this)}>
         <a href="#">
           <span aria-hidden="true">&larr;</span>
             Previous
         </a>
      </li>
    );
  }
}

export default PrevBtn;
