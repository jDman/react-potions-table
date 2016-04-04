import React from 'react';

class TableCell extends React.Component{
  render() {
    let stockClass
      , text;

    if (typeof this.props.cellData === 'boolean') {
      if (this.props.cellData) {
        stockClass = 'success';
        text = <i className='glyphicon glyphicon-ok'></i>;
      } else {
        stockClass = 'danger';
        text = <i className='glyphicon glyphicon-remove'></i>;
      }
    } else {
      text = <span>{this.props.cellData}</span>;
    }

    return (
      <td className={stockClass}>
        {text}
      </td>
    );
  }
}

TableCell.propTypes = {
  cellData: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.bool
  ])
};

export default TableCell;
