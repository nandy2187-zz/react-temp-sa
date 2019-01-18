import React from 'react';
import TextField from '@material-ui/core/TextField';

class InputCatalog extends React.Component {

    getInput (props) {
        //TODO Add validations per type adding a handlerchange
        let type = props.type;
        let required = props.required;
        let placeholder = props.placeholder;
        switch(type) {
            case 'phone':
                return <TextField required = {required} placeholder={placeholder} type= {type} />
            case 'email':
                return <TextField required = {required} placeholder={placeholder} type= {type} />
            case 'password':
                return <TextField required = {required} placeholder={placeholder} type= {type} />
            case 'text':
                return <TextField required = {required} placeholder={placeholder}/>
            case 'zip':
                return <TextField required = {required} placeholder={placeholder} />
            default:
              return <TextField required = {required} placeholder={placeholder}/>
          }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

    //TYPES: according the type we can use a special validation
    //for each

    //phone input
    //email input
    //text input
    //zip input
    //password input
    
    render() {
        let inputElement = this.getInput(this.props);
        console.log(this.props);
        

        return (
            <div className="input-container">
                {inputElement}
            </div>
        );
    }
}

export default InputCatalog;