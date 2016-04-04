import React from 'react';
import TableRow from './table-row';

class Table extends React.Component {
  constructor() {
    super();
  }

  render() {
    let noData = {
      about: 'No potions found!'
    }

    return (
      <table className="table table-striped table-responsive">
        <thead>
          <TableRow type="header" />
        </thead>

        <tbody>
        {
          this.props.list ?
          this.props.list.map(potion => {
            return <TableRow key={potion._id} data={potion} />;
          }) :
          <TableRow data={noData} />
        }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = { list: React.PropTypes.array };

export default Table;
