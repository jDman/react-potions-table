import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
  }

  handleChange(event) {
    this.props.searchResult(this.refs.nameInput.value);
  }

  render() {
    return (
      <div>
        Search by name: <input type="text"
                               onChange={this.handleChange.bind(this)}
                               ref="nameInput"/>
      </div>
    );
  }
}

export default Search;
