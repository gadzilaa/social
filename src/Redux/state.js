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
            ]
        },
        profilePage: {
            posts: [
                { id: 1, message: 'My first post', likesCount: 2 },
                { id: 2, message: 'My second post', likesCount: 22 }
            ],
            newPostText: ''
        }
    },
    getState () {
        return this._state
    },

    _callSubscriber() {
        console.log('changed');
    },

    addPost() {
        debugger;
        let newPost = {
            id: 3, message: this._state.profilePage.newPostText, likesCount: 3
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state)
    },

    updateNewPostText  (newText)  {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },

     subscribe  (observer)  {
        this._callSubscriber = observer
    }

}

export default store;