import React from 'react';

const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black"
}

class Buttons extends React.Component {

    handleClick = () => {
        switch(this.props.name) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case ".":
                this.props.setSecondNumber(this.props.name);
                break;
            case "+":
            case "-":
            case "x":
            case "/":
            case "=":
                this.props.setOperator(this.props.name);
                break;
            case "clear":
                this.props.clearResult();
                break;
            default:
                break;
        }
    }
        //if button is a number, store the string of numbers as secondNumber until 
        //if there is no operator and operator is pressed, the first string becomes oldNumber
        //the next string of number becomes newNumber
        //if another operator is pressed, the result of oldNumber and newNumber is calculated and becomes oldNumber and the new operator is stored
        //if equals is pressed, the result of oldNumber and newNumber is calculated and becomes oldNumber
        //if clear is pressed, display is zero

    render () {
        return (
            <button
                id={this.props.id}
                style={buttonStyle}
                onClick={this.handleClick}
                >
                <h3>{this.props.name}</h3>
            </button>
        )
    }
}

export default Buttons;