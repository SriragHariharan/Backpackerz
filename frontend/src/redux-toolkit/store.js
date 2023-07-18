import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducers/UserReducer'
import PostsReducer from './reducers/PostsReducer'

export const store = configureStore({
    reducer:{
        user: UserReducer,
        posts: PostsReducer, 
    }
})