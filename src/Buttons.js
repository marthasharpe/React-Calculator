import React from 'react';

class Buttons extends React.Component {

    render () {
        return (
            <div className="buttons-container">
                <div id="one" value="1" onClick={this.props.handleClick}>1</div>
            </div>
        )
    }
}

export default Buttons;