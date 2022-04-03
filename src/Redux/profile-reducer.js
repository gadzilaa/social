const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {

    posts: [
        { id: 1, message: 'My first post', likesCount: 2 },
        { id: 2, message: 'My second post', likesCount: 22 }
    ],
    newPostText: ''


}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 3, message: state.newPostText, likesCount: 3
            };
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, newPost],
                
            };
            }

        case UPDATE_NEW_POST_TEXT: {
           return {
               ...state,
               newPostText: action.newText
            };
            }
        default:
            return state;
    }
}

export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export let updateNewPostTextActionCreater = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
