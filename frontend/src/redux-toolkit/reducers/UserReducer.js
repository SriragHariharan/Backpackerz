const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name:'User',
    initialState:{  user : JSON.parse(localStorage.getItem('TechTalkUser')),
                    username : null,
                    description : null,
                    city : null
},
    reducers:{
        LoginUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('TechTalkUser', JSON.stringify(action.payload) );
        },
        LogoutUser : (state, action) => {
            state.user = null
            state.userDetails = null
            localStorage.removeItem('TechTalkUser')
        },
        SetUsername : (state, action) =>{
            state.username = action.payload;
        },
        SetDescription : (state, action) =>{
            state.description = action.payload;
        },
        SetCity : (state, action) =>{
            state.city = action.payload;
        }

    }
})

export default userSlice.reducer;

//action creators 
export const {LoginUser, LogoutUser, SetUsername, SetDescription, SetCity} = userSlice.actions;