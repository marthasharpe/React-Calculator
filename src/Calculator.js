import React from 'react';
import Buttons from './Buttons';
import Display from './Display';
import buttonData from './buttonData'
import './Calculator.css'

let data = buttonData;

class Calculator extends React.Component {
    state = {
        firstNumber: '',
        secondNumber: '0',
        operator: '',
    }

    clearResult = () => {
        this.setState({
            firstNumber: '',
            secondNumber: '0',
            operator: '',
        })
    }

    setSecondNumber = (name) => {
        if (this.state.secondNumber === '0' && name === '.'){
            this.setState({
                secondNumber: this.state.secondNumber + name
            })
        } else if (this.state.secondNumber === '0' && name !== '.') {
            this.setState({
                firstNumber: this.state.secondNumber,
                secondNumber: name
            })
        } else if (name === '.' && this.state.secondNumber.includes('.')) {
            this.setState({
                secondNumber: this.state.secondNumber
            })
        } else {
            this.setState({
                secondNumber: this.state.secondNumber + name
            })
        }
    }
    
    setOperator = (name) => {
        if (this.state.operator === ''){
            this.setState({
                firstNumber: this.state.secondNumber,
                secondNumber: '',
                operator: name
            })
        } else if ((this.state.secondNumber === '' || this.state.secondNumber === '-') && name !== '-') {
            this.setState({
                secondNumber: '',
                operator: name
            })
        } else if (this.state.secondNumber === '' && name === '-') {
            this.setState({
                secondNumber: name
            })
        } else {
            this.setState({
                firstNumber: this.state.secondNumber,
                secondNumber: '',
                operator: name     
            })
            this.calculate();
        }
    }

    calculate = () => {
        let result;
        switch (this.state.operator) {
            case "+":
                result = parseFloat(this.state.firstNumber) + parseFloat(this.state.secondNumber);
                break;
            case "-":
                result = parseFloat(this.state.firstNumber) - parseFloat(this.state.secondNumber);
                break;
            case "x":
                result = parseFloat(this.state.firstNumber) * parseFloat(this.state.secondNumber);
                break;
            case "/":
                result = parseFloat(this.state.firstNumber) / parseFloat(this.state.secondNumber);
                break;
            default:
                break;
        }
        this.setState({
            firstNumber: result.toString(),
            secondNumber: '',
        })
    }

    render() {
        return (
            <div className="calculator-container">
                <Display secondNumber={this.state.secondNumber} firstNumber={this.state.firstNumber}/>
                <div className="buttons-container">
                    {data.map(button => (
                        <Buttons 
                            id={button.id}
                            key={button.name}
                            name={button.name}
                            setSecondNumber={this.setSecondNumber}
                            setOperator={this.setOperator}
                            clearResult={this.clearResult}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Calculator;