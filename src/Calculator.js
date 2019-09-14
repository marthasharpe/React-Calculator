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
        operator: null,
    }

    clearResult = () => {
        this.setState({
            oldNumber: '0',
            newNumber: '',
            operator: null,
        })
    }

    setNewNumber = (name) => {
        this.setState({
            newNumber: this.state.newNumber + name
        })
    }

    setOperator = (name) => {
        console.log(this.state.operator)
        if (this.state.operator === null){
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
            default:
                break;
        }
        this.setState({
            oldNumber: result,
            newNumber: '',
        })
    }

    render() {
        return (
            <div className="calculator-container">
                <Display newNumber={this.state.newNumber} oldNumber={this.state.oldNumber}/>
                <button id="clear" onClick={this.clearResult}>Clear</button>
                <div className="buttons-container">
                    {data.map(button => (
                        <Buttons 
                            id={button.id}
                            key={button.name}
                            name={button.name}
                            setNewNumber={this.setNewNumber}
                            setOperator={this.setOperator}
                            calculate={this.calculate}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Calculator;