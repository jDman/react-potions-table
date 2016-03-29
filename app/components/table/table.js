import React from 'react';
import TableRow from './table-row';

class Table extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <table className="table table-striped table-responsive">
        <thead>
          <TableRow type="header" />
        </thead>

        <tbody>
        {
          this.props.list.map(potion => {
            return <TableRow key={potion._id} data={potion}/>;
          })
        }
        </tbody>
      </table>
    );
  }
}

export default Table;
