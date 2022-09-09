import React from "react";

class Button extends React.Component {
    render() {
        const { type } = this.props
        return (
            <div className="div-button">
                <button type={type}>Login</button>
            </div>
        )
    }
}

export default Button;