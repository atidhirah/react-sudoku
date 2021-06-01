import React from "react";

class SudokuNode extends React.Component {
  handleClick() {
    const pos = this.props.pos;
    this.props.handleSelect(pos);
  }

  render() {
    const isSelected = this.props.isSelected;
    const val = this.props.val;
    let elem;
    if (Array.isArray(val)) {
      elem = this.renderNotes(val);
    } else {
      elem = this.renderNumber(val);
    }

    return (
      <div
        className="sudoku-node"
        onClick={() => this.handleClick()}
        style={{ backgroundColor: isSelected ? "lightblue" : "white" }}
      >
        {elem}
      </div>
    );
  }

  renderNumber(val) {
    let display = val === "." ? "" : val;
    return <p className="node-value">{display}</p>;
  }

  renderNotes(val) {
    let arr = val;
    let notes = Array(9)
      .fill(0)
      .map((_, i) => {
        let num = i + 1;
        let style = {};
        style.opacity = arr.includes(num) ? 1 : 0;

        return (
          <li key={num} className="node-note" style={style}>
            {num}
          </li>
        );
      });

    return <ul className="node-notes">{notes}</ul>;
  }
}

export default SudokuNode;
