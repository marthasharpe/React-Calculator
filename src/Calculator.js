import React from 'react';
import Buttons from './Buttons';
import Result from './Result';
import buttonData from './buttonData'
import './Calculator.css'

let data = buttonData;

class Calculator extends React.Component {
    state = {
        result: 0,
    }

    render() {
        return (
            <div className="calculator-container">
                <Result result={this.state.result}/>
                <button id="clear">Clear</button>
                <div className="buttons-container">
                    {data.map(button => (
                        <Buttons 
                            id={button.id}
                            key={button.name}
                            name={button.name}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Calculator;