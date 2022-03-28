
let rerenderEntireTree = () => {
    console.log('changed');
}


let state = {
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
    },
    profilePage: {
        posts: [
            { id: 1, message: 'My first post', likesCount: 2 },
            { id: 2, message: 'My second post', likesCount: 22 }
        ],
        newPostText: ''
    },
}

export const addPost = () => {
    debugger;
    let newPost = {
        id: 3, message: state.profilePage.newPostText, likesCount: 3
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}




export default state;