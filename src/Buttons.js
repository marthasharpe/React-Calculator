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
                this.props.setNewNumber(this.props.name);
                break;
            case "+":
            case "-":
            case "x":
            case "/":
                this.props.setOperator(this.props.name);
                break;
            case "=":
                this.props.calculate();
                break;
            default:
                break;
        }
    }
        //if button is a number, store the string of numbers as newNumber
        //if operator is pressed, the first string becomes oldNumber and the next string of numbers becomes newNumber
        //if another operator is pressed, the result of oldNumber and newNumber is calculated and becomes newNumber
        //if equals is pressed, it displays the result
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