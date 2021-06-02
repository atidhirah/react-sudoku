import React from "react";

class SudokuNode extends React.Component {
  handleClick() {
    const pos = this.props.pos;
    this.props.handleSelect(pos);
  }

  render() {
    const isSelected = this.props.isSelected;
    const isHelper = this.props.isHelper;
    const val = this.props.val;
    let elem = Array.isArray(val)
      ? this.renderNotes(val)
      : this.renderNumber(val);

    let style = {
      backgroundColor: isSelected
        ? "#00adb5"
        : isHelper
        ? "#a6e3e9"
        : "#eeeeee",
    };

    return (
      <div
        id={`node-${this.props.pos}`}
        className="sudoku-node"
        onClick={() => this.handleClick()}
        style={style}
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

  shouldComponentUpdate(nextProps) {
    if (
      this.props.val !== nextProps.val ||
      this.props.isSelected !== nextProps.isSelected ||
      this.props.isHelper !== nextProps.isHelper
    ) {
      return true;
    }
    return false;
  }
}

export default SudokuNode;
