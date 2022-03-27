import { rerenderEntireTree } from "../render";

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
        ]
    },
}

export let addPost= (postMessage) => {
    debugger;
    let addPost = {
        id:3 , message: postMessage, likesCount : 3}

    state.profilePage.posts.push(addPost)
    rerenderEntireTree(state)
    }
    



export default state;