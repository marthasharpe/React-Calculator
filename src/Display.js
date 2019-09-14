import React from 'react';

const displayStyle = {
    background: "darkblue",
    color: "white",
}

class Display extends React.Component {
    render () {
        return (
            <div id="result" style={displayStyle}>
                <h2>{this.props.newNumber !== '' ? this.props.newNumber : this.props.oldNumber}</h2>
            </div>
        )
    }
}

export default Display;