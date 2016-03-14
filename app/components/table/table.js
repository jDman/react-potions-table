import React from 'react';
import TableRow from './table-row';

class Table extends React.Component {
  render() {
    return (
      <table>
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
