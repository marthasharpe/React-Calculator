import React from 'react';
import Buttons from './Buttons';
import Display from './Display';
import buttonData from './buttonData'
import './Calculator.css'

let data = buttonData;

class Calculator extends React.Component {
    state = {
        oldNumber: '0',
        newNumber: '',
        operator: '',
    }

    clearResult = () => {
        this.setState({
            oldNumber: '0',
            newNumber: '',
            operator: '',
        })
    }

    setNewNumber = (name) => {
        this.setState({
            newNumber: this.state.newNumber + name
        })
    }

    setOperator = (name) => {
        if (this.state.operator === ''){
            this.setState({
                oldNumber: this.state.newNumber,
                newNumber: '',
                operator: name
            })
        } else {
            this.setState({
                oldNumber: this.state.newNumber,
                newNumber: '',
                operator: name     
            })
            this.calculate();
        }
    }

    calculate = () => {
        let result;
        switch (this.state.operator) {
            case "+":
                result = parseFloat(this.state.oldNumber) + parseFloat(this.state.newNumber);
                break;
            case "-":
                result = parseFloat(this.state.oldNumber) - parseFloat(this.state.newNumber);
                break;
            case "x":
                result = parseFloat(this.state.oldNumber) * parseFloat(this.state.newNumber);
                break;
            case "/":
                result = parseFloat(this.state.oldNumber) / parseFloat(this.state.newNumber);
                break;
            case "=":
                result = parseFloat(this.state.newNumber);
                break;
            default:
                break;
        }
        this.setState({
            oldNumber: result.toString(),
            newNumber: '',
        })
        //if equals is pushed, the result should be newNumber and operator should be null
        console.log(this.state)
    }

    render() {
        return (
            <div className="calculator-container">
                <Display newNumber={this.state.newNumber} oldNumber={this.state.oldNumber}/>
                <div className="buttons-container">
                    {data.map(button => (
                        <Buttons 
                            id={button.id}
                            key={button.name}
                            name={button.name}
                            setNewNumber={this.setNewNumber}
                            setOperator={this.setOperator}
                            calculate={this.calculate}
                            clearResult={this.clearResult}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Calculator;