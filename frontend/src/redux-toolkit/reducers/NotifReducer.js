import { createSlice } from "@reduxjs/toolkit";

const notifSlice = createSlice({
    name:'notifications',
    initialState: { notifications:[] },
    reducers: {
        setNotifications: (state, action) =>{
            state.notifications = action.payload;
        }
    }
})

export default notifSlice.reducer;

//action creators
export const { setNotifications } = notifSlice.actions
