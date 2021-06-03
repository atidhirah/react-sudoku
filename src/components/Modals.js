import React from "react";

class Modals extends React.Component {
  handleClick(status, name) {
    this.props.handleModal(status, name);
  }

  render() {
    const status = this.props.modalStatus;
    const name = this.props.modalName;

    if (!status) {
      return <></>;
    } else {
      let text;
      let buttons = this.modalButtons(name);
      switch (name) {
        case "makegame":
          text = "Are you sure want to make your own Sudoku game?";
          break;
        default:
          text = "Your game is not finished yet, are you sure want to give up?";
      }

      return (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-text">
              <p>{text}</p>
            </div>
            <div className="modal-buttons">{buttons}</div>
          </div>
        </div>
      );
    }
  }

  modalButtons(name) {
    return (
      <>
        <button onClick={() => this.handleClick(true, name)}>
          Yes I am sure
        </button>
        <button onClick={() => this.handleClick(false, "")}>
          No I change my mind
        </button>
      </>
    );
  }
}

export default Modals;
