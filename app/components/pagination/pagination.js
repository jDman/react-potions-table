import React from 'react';
import PageSelect from './pageSelect';

class Pagination extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <PageSelect updateResultsPerPage={this.props.updateResultsPerPage}/>

          <span className="label label-default">page: {this.props.page}</span>
        </div>
      </form>
    );
  }
}

export default Pagination;
