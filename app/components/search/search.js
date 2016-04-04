import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.props.searchResult(this.refs.nameInput.value);
  }

  render() {
    return (
      <form className="col-sm-6"
            onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Search by name: </label>
          <input type="text"
                 className="form-control"
                 onChange={this.handleChange.bind(this)}
                 ref="nameInput"/>
        </div>
      </form>
    );
  }
}

Search.propTypes = { searchResult: React.PropTypes.func };

export default Search;
