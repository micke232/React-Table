import React, { Component } from 'react';

class Table extends Component {
  static state = {
    data: [],
  }
  renderHeaders() {
    return this.props.columns.map(header =>
      <th key={header.label}><span>{header.label}</span></th>,
    );
  }

  renderCell(data) {
    const { onSelect } = this.props;
    return this.props.columns.map((col => (
      <td key={col.key} >{col.key === 'selected' ?
        <input type="checkbox" onChange={() => onSelect(data, !data.isSelected)} />
        : data[col.key]}
      </td>
    )
    ));
  }

  renderRows() {
    return this.props.data.map((row, index) =>
      <tr key={`${row}${index}`} >{this.renderCell(row)}</tr>,
    );
  }

  render() {
    const { width } = this.props;
    return (
      <div>
        <table style={{ width: width }}>
          <thead>
            <tr>
              {this.renderHeaders()}
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
