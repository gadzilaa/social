import { sendMessageCreater, updateNewMessageBodyCreater } from '../../Redux/dialogs-reducer'
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageCreater: () => {
            dispatch(sendMessageCreater())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreater(body))
        }

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
