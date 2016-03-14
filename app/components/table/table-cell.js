import React from 'react';

class TableCell extends React.Component{
  render() {
    let stockClass
      , text;

    if (typeof this.props.cellData === 'boolean') {
      if (this.props.cellData) {
        stockClass = 'success';
        text = "In stock";
      } else {
        stockClass = 'danger';
        text = "Out of stock";
      }
    } else {
      text = this.props.cellData;
    }

    return (
      <td className={stockClass}>
        {text}
      </td>
    );
  }
}

export default TableCell;
