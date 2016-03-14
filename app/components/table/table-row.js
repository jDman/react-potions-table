import React from 'react';
import * as _ from 'underscore';

import TableHeader from './table-header';
import TableCell from './table-cell';

class TableRow extends React.Component{
  constructor() {
    super();
  }

  render() {
    if (this.props.type === 'header') {
      return (
        <tr>
          <TableHeader />
        </tr>
      );
    } else {
      return (
        <tr>
          <TableCell />
        </tr>
      );
    }
  }
}

export default TableRow;
