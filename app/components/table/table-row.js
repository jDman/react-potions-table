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
          <TableHeader cellData="Name" />
          <TableHeader cellData="About" />
          <TableHeader cellData="Effectiveness %" />
          <TableHeader cellData="Stock" />
        </tr>
      );
    } else {
      return (
        <tr>
          <TableCell cellData={this.props.data.name}/>
          <TableCell cellData={this.props.data.about}/>
          <TableCell cellData={this.props.data.effectiveness}/>
          <TableCell cellData={this.props.data.isStocked}/>
        </tr>
      );
    }
  }
}

export default TableRow;
