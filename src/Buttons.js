import React from 'react';

const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black"
}

class Buttons extends React.Component {

    render () {
        return (
            <button
                id={this.props.id}
                style={buttonStyle}
                onClick={e => this.props.onClick(e.target.name)}
                >
                <h3>{this.props.name}</h3>
            </button>
        )
    }
}

export default Buttons;