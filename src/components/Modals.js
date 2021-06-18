import React from "react";
import modalText from "../db/modalText";

class Modals extends React.Component {
  render() {
    const status = this.props.modalStatus;
    const name = this.props.modalName;
    if (!status) return <></>;

    let text = modalText[name];
    let buttons = this.modalButtons(name);

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

  modalButtons(name) {
    const buttonText = ["Yes I am sure", "No I change my mind"];
    let handleClick;
    switch (name) {
      case "makegame":
        handleClick = this.props.handleMakeGame;
        break;
      case "unsolved":
        handleClick = this.props.handleMakeGame;
        break;
      case "newgame":
        handleClick = this.props.handleNewGame;
        break;
      default:
        handleClick = this.props.handleSolve;
    }

    return (
      <>
        <button onClick={() => handleClick()}>{buttonText[0]}</button>
        <button onClick={() => this.props.handleModal(false, "")}>
          {buttonText[1]}
        </button>
      </>
    );
  }
}

export default Modals;
