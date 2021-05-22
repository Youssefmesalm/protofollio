import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  startTyping,
  startDeleting,
  typing,
  deleting,
} from "../../redux/typer/typerActions";
import "./typer.scss"

class Typer extends Component {
  static propTypes = {
    endTag: PropTypes.string,
    startTag: PropTypes.string,
    dataText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]),
    deleteSpeed: PropTypes.number,
    typeSpeed: PropTypes.number,
  };

  componentDidMount() {
    this.handleType();
  }
  handleType = () => {
    const { speed,deleteSpeed,typeSpeed, isDeleting, text, loop, dataText } = this.props;

    const i = loop % dataText.length;
    const fullText = dataText[i];
    if (isDeleting) {
      this.props.dispatch(deleting(fullText));
    } else if (!isDeleting) {
      this.props.dispatch(typing(fullText));
    }

    if (text === "" && isDeleting) {
      setTimeout(()=> this.props.dispatch(startTyping(typeSpeed),500));
    } else if (text === fullText && !isDeleting) {
      this.props.dispatch(startDeleting(deleteSpeed));
    }

    setTimeout(this.handleType, speed);
  };

  render() {
    const { text, startTag, endTag } = this.props;
    return (
      <div>
        <span>
          {"<"}
          <i>code</i>
          {"> "} {startTag}
        </span>
        <span>{text}</span>
        <span className="cursor"></span>
        <span>
          {" <"}
          <i>code</i>
          {">"}
        </span>
      </div>
    );
  }
}

function selectors(state) {
  return {
    text: state.typer.text,
    loop: state.typer.loopNum,
    isDeleting: state.typer.isDeleting,
    speed: state.typer.speed,
  };
}

// function dispatcher(dispatch,props) {
//   return {
//     type: (fullText) => dispatch(type(fullText, props.typeSpeed)),
//     remove: (fullText) => dispatch(clear(fullText, props.deleteSpeed)),
//   };
// }
export default connect(selectors)(Typer);
