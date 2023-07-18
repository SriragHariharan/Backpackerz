import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name:'posts', 
    initialState:{ posts:[] },
    reducers:{
        addPosts:(state, action) => {
            state.posts = action.payload;
        },
        addNewPost:(state, action) => {
            state.posts = [action.payload, ...state.posts ]
        },
        deletePost : (state, action) => {
            state.posts = state.posts.filter((post) => action.payload !== post._id)
        }
    }
})

export default postsSlice.reducer;

//action creators
export const { addPosts, addNewPost, deletePost } = postsSlice.actions
