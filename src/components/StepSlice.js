import React from 'react';
import Button from '@material-ui/core/Button';
import NotificationBar from './NotificationBar';
import InputCatalog from './InputCatalog';
import Icon from '@material-ui/core/Icon';



class StepSlice extends React.Component {

    
    
    render() {
        let icon = this.props.icon;
        let text = this.props.text;
        let title = this.props.title
        let images = this.props.urls;
        let notificationMessage = this.props.notificationMessage;
        let inputListType = this.props.inputListType;
        let classStep = this.props.class + ' step-container';
        let imageUrlList = images &&  images.map((url, index) => <img key={index} className="logo" src={url} alt={'img-notification-bar'} />);
        let imageContainer = imageUrlList ? <div className="images-container">{imageUrlList}</div> : null;
        let inputCollection = null;
        
        console.log(inputListType);
        if(inputListType && inputListType.length) {
            inputCollection = inputListType.map((input) => <InputCatalog key={input.type} type={input.type} required={input.required} placeholder={input.placeholder}/>);
        }

        return (
            <div className={classStep}>
                <div className="title-container">
                    <h1>{title}</h1>
                </div>
                {imageContainer}
                <NotificationBar message={notificationMessage} />
                <div className="input-container">
                    {inputCollection}
                </div>
            </div>
        );
    }
}

export default StepSlice;