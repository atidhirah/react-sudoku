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
    if (name === "newgame" || name === "gameover") {
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

    let handleClick =
      name === "solve" ? this.props.handleSolve : this.props.handleMakeGame;

    return (
      <>
        <button onClick={() => handleClick()}>Yes</button>
        <button onClick={() => this.props.handleModal(false, "")}>No</button>
      </>
    );
  }
}

export default Modals;
