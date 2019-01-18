import React from 'react';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';
 

class NotificationBar extends React.Component {

    createMarkup(text) {
        let markup = text ? text : '';
        return {__html: markup};
    }

    
    render() {
        let markup = this.createMarkup(this.props.message);
        return (
            <div className="notification-bar">
                <div dangerouslySetInnerHTML={markup} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    
    return {
        notificationUpdates: state.notificationBarTree
    };
}
export default connect(mapStateToProps)(NotificationBar);