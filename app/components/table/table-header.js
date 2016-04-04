import React from 'react';

class TableHeader extends React.Component{
  render() {
    return <th>{this.props.cellData}</th>;
  }
}

TableHeader.propTypes = { cellData: React.PropTypes.string };

export default TableHeader;
