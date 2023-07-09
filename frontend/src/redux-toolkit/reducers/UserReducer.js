const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name:'User',
    initialState:{ user : JSON.parse(localStorage.getItem('TechTalkUser')) },
    reducers:{
        LoginUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('TechTalkUser', JSON.stringify(action.payload) );
        },
        LogoutUser : (state, action) => {
            state.user = null
            localStorage.removeItem('TechTalkUser')
        }

    }
})

export default userSlice.reducer;

//action creators 
export const {LoginUser, LogoutUser} = userSlice.actions;