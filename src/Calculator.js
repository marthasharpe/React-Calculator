import React from 'react';
import Buttons from './Buttons';

class Calculator extends React.Component {
    state = {
        display: 0,
    }

    handleClick = (e) => {
        this.setState({
            display: e.target.value
        })
    }

    render() {
        return (
            <div className="calculator-container">
                <h1 id="display">
                    {this.state.display}
                </h1>
                <Buttons handleClick={this.handleClick}/>
            </div>
        )
    }
}

export default Calculator;