import React from "react";

class Input extends React.Component {
    render() {
        const { type, name, value, onChange }= this.props
        return (
            <div className='div-input'>                 
                <input 
                type = { type } 
                name = { name } 
                value = { value }
                onChange ={ onChange } />
            </div>
        )
    }
}

export default Input