import React from 'react';

class TableHeader extends React.Component{
  render() {
    return <th>{this.props.cellData}</th>;
  }
}

export default TableHeader;
