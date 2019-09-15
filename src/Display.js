import React from 'react';

const displayStyle = {
    background: "darkblue",
    color: "white",
}

class Display extends React.Component {
    render () {
        return (
            <div id="display" style={displayStyle}>
                <h2>{this.props.secondNumber !== '' ? this.props.secondNumber : this.props.firstNumber}</h2>
            </div>
        )
    }
}

export default Display;