import {createSlice} from '@reduxjs/toolkit';

export const Notification = createSlice({
    name:"notification",
    initialState:{status:"",title:"",message:"", showCartItems: false },
    reducers:{
        showNotifications(state,action){
            state.status = action.payload.status;
            state.title = action.payload.title;
            state.message= action.payload.message;
        },
        hideNotification(state,action){
            state.status = "";
        },
        toggleCartArea(state) {
            // console.log(state)
            state.showCartItems = !state.showCartItems;
        }
    }
})