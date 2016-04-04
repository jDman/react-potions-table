import React from 'react';
import PrevBtn from '../buttons/previous';
import NextBtn from '../buttons/next';

class Pager extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav>
        <ul className="pager">
          <PrevBtn prevPage={this.props.prevPage} />
          <NextBtn nextPage={this.props.nextPage} />
        </ul>
      </nav>
    );
  }
}

Pager.propTypes = {
  prevPage: React.PropTypes.func,
  nextPage: React.PropTypes.func
};

export default Pager;
