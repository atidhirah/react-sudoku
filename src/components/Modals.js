import React from "react";
import { AiOutlineClose } from "react-icons/ai";
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
          <button
            className="modal-close"
            onClick={() => this.props.handleModal(false, "")}
          >
            <AiOutlineClose />
          </button>
          <div className="modal-text">
            <p>{text}</p>
          </div>
          <div className="modal-buttons">{buttons}</div>
        </div>
      </div>
    );
  }

  modalButtons(name) {
    let buttonText = ["Yes", "No"];
    let handleClick;
    switch (name) {
      case "makegame":
        handleClick = this.props.handleMakeGame;
        break;
      case "unsolved":
        handleClick = this.props.handleMakeGame;
        break;
      default:
        handleClick = this.props.handleSolve;
    }

    if (name === "newgame") {
      return (
        <>
          <button onClick={() => this.props.handleNewGame("easy")}>Easy</button>
          <button onClick={() => this.props.handleNewGame("medium")}>
            Medium
          </button>
          <button onClick={() => this.props.handleNewGame("hard")}>Hard</button>
        </>
      );
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
