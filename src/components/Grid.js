import React from "react";
import Row from "./Row";

class Grid extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.grid.map((val, ind) => (
            <Row
              onChange={this.props.onChange}
              key={ind}
              rowNumber={ind}
              data={val}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Grid;
