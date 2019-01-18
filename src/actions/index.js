
//ACTIONS

//Purple Bar Notification
export const notificationBarUpdates = (text) => {
    return {
        type: 'UPDATE_MESSAGE',
        message: text
    }
}
export default notificationBarUpdates;