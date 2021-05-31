import React from "react";

class SudokuNode extends React.Component {
  handleClick(pos, val) {
    this.props.handleMap(this.props.arrMap, pos, val);
  }

  render() {
    const val = this.props.val;
    if (val === ".") {
      return this.renderButtons();
    } else if (Array.isArray(val)) {
      return this.renderNotes();
    } else {
      return this.renderNumber();
    }
  }

  renderNumber() {
    let btnList = this.getButtons();
    return (
      <div className="sudoku-node">
        {btnList}
        <p className="node-value">{this.props.val}</p>
      </div>
    );
  }

  renderNotes() {
    let arrNote = this.props.val;
    let btnList = this.getButtons();
    let notes = Array(9)
      .fill(0)
      .map((_, i) => {
        let style = {};
        if (arrNote.includes(i + 1)) {
          style.opacity = 1;
        } else {
          style.opacity = 0;
        }

        return (
          <li key={i + 1} className="node-note" style={style}>
            {i + 1}
          </li>
        );
      });
    console.log("NOTES");

    return (
      <div className="sudoku-node">
        {btnList}
        <ul className="node-notes">{notes}</ul>
      </div>
    );
  }

  renderButtons() {
    let btnList = this.getButtons();
    return <div className="sudoku-node">{btnList}</div>;
  }

  getButtons() {
    let btnList = Array(9)
      .fill(0)
      .map((_, i) => {
        const pos = this.props.pos;
        const num = i + 1;

        return (
          <li className="node-item" key={`num-${num}`}>
            <button
              className="node-button"
              onClick={() => this.handleClick(pos, num)}
            >
              {num}
            </button>
          </li>
        );
      });

    return <ul className="node-buttons">{btnList}</ul>;
  }
}

export default SudokuNode;
