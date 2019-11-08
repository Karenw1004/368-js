import React from "react";
import Cell from "./Cell";

class Row extends React.Component {
  render() {
    const { rowNumber, data, onChange } = this.props;
    return (
      <tr key={rowNumber}>
        {data.map((val, ind) => {
          return (
            <Cell onChange={onChange} key={ind} row={rowNumber} col={ind} />
          );
        })}
      </tr>
    );
  }
}

export default Row;
