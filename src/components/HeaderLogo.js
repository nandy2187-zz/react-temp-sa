import React from 'react';
import '../styles/header.css';
import CustomButton from './CustomButton';

class HeaderLogo extends React.Component {

    onClickAction = ()=> {
        console.log('CustomButton Clicked!');
    }

    
    render() {
        let logo = this.props.logoUrl ?  <img className="logo" src={this.props.logoUrl} alt={'logo-senior-advisor'} /> : null;
        return (
            <div className="header-container">
                <div className="logo-container">{logo}</div>
                <div className="action-component">
                    <CustomButton icon={"phone"} text={"Tap to Call"} isPlainText={false} callToAction={this.onClickAction} class={"tab-to-call"}/>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default HeaderLogo;