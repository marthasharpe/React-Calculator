import React from 'react';

const resultStyle = {
    background: "darkblue",
    color: "white",
}

class Result extends React.Component {
    render () {
        return (
            <div id="result" style={resultStyle}>
                <h2>{this.props.result}</h2>
            </div>
        )
    }
}

export default Result;