import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import '../styles/buttons.css';


class CustomButton extends React.Component {

    callToAction = () => {
        this.props.callToAction();
    }
    
    render() {
        //isPlainText is for the buttons tap to call for /mobile or for the right info label in /service-locator page
        let isPlainText = this.props.isPlainText;
        let text = this.props.text;
        let className = this.props.class + ' custom-btn';
        let icon = this.props.icon ? <Icon className="icon-btn">{this.props.icon}</Icon> : null;
        let button = !isPlainText ? <Button variant="contained" onClick={this.callToAction} className={className}>{icon} {text} </Button> : text;

        return (
            <div className="button-custom-container">
                {button}
            </div>
        );
    }
}

export default CustomButton;