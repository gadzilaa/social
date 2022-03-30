import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Bob' },
                { id: 3, name: 'Bin' },
                { id: 4, name: 'Petya' },
                { id: 5, name: 'Vanya' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'My first name is Igor ' },
                { id: 3, message: 'My last name is Golyb' }
            ],
            newMessageBody: ''
        },
        profilePage: {
            posts: [
                { id: 1, message: 'My first post', likesCount: 2 },
                { id: 2, message: 'My second post', likesCount: 22 }
            ],
            newPostText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }


}






export default store;