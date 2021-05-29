import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled, { keyframes }  from "styled-components";
import {
  startTyping,
  startDeleting,
  typing,
  deleting,
} from "../../redux/typer/typerActions";

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
    dispatch : PropTypes.func.isRequired
  };

  componentDidMount() {
    this.handleType();
  }
  handleType = () => {
    const { dispatch,speed,deleteSpeed,typeSpeed, isDeleting, text, loop, dataText } = this.props;

    const i = loop % dataText.length;
    const fullText = dataText[i];
    if (isDeleting) {
      dispatch(deleting(fullText));
    } else if (!isDeleting) {
      dispatch(typing(fullText));
    }

    if (text === "" && isDeleting) {
      setTimeout(()=> this.props.dispatch(startTyping(typeSpeed),500));
    } else if (text === fullText && !isDeleting) {
      this.props.dispatch(startDeleting(deleteSpeed));
    }

    setTimeout(this.handleType, speed);
  };

  render() {
    const { text, startTag } = this.props;
    return (
      <TyperContainer>
        <span>
          {"<"}
          <i>code</i>
          {"> "} {startTag}
        </span>
        <span>{text}</span>
        <Cursor></Cursor>
        <span>
          {" <"}
          <i>code</i>
          {">"}
        </span>
      </TyperContainer>
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

const TyperContainer = styled.div`
  font-size: ${(props)=>props.theme.fonts.sizes.xlarge};
  i{
    color: ${({theme})=>theme.colors.primary};
  }
`
const Blink = keyframes`
    50% {
        border-color: transparent;
       }`
const Cursor = styled.span`
  animation: ${Blink} 0.7s steps(1) infinite;
  border-left: 0.1em solid ${(props) => props.theme.colors.primary};
  margin-left: 6px;
`;


export default connect(selectors)(Typer);
