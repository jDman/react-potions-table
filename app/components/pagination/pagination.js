import React from 'react';
import PageSplit from './pageSplit';

class Pagination extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form className="form-inline">
        <PageSplit updateResultsPerPage={this.props.updateResultsPerPage}/>

        <div className="form-group">
          <span className="label label-default">page: {this.props.page}</span>
        </div>
      </form>
    );
  }
}

export default Pagination;
