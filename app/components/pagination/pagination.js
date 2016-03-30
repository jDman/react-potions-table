import React from 'react';

class Pagination extends React.Component {
  constructor() {
    super();
  }

  handleChange(event) {
    this.props.updateResultsPerPage(event.target.value);
  }

  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <select defaultValue="10"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  ref="selectResults">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="Show all">Show all</option>
          </select>

          <span className="label label-default">page: {this.props.page}</span>
        </div>
      </form>
    );
  }
}

export default Pagination;
