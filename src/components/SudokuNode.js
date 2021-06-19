import React from "react";

class SudokuNode extends React.Component {
  render() {
    const { pos, val, isStarter, isSelected, isHelper } = this.props;

    let elem = Array.isArray(val)
      ? this.renderNotes(val)
      : this.renderNumber(val);

    let bg = isStarter ? "starter" : "";
    bg += isSelected ? " selected" : isHelper ? " helper" : " default";

    return (
      <div
        id={`node-${this.props.pos}`}
        className={`sudoku-node ${bg}`}
        onClick={() => this.props.handleSelect(pos)}
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
