import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <div className = "form">
                <form onSubmit = {this.props.getWeather}>
                    <input  type = "text" 
                            name = "city" 
                            value = {this.props.city} 
                            placeholder = "city" 
                            onChange = {this.props.handleChanges}
                            />
                    <input  type = "text"
                            name = "country" 
                            value = {this.props.country} 
                            placeholder = "country"
                            onChange = {this.props.handleChanges}
                            />
                    <button> search </button>
                </form>
            </div>
        );
    }
}
 
export default Form;