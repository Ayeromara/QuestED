import {createSlice} from "@reduxjs/toolkit";

const initialState={
    firstName: 'Isaiah',
    lastName: 'Ayeromara',
    userId: 1,
    profileImage: ''
}

export const User = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        updateFirstName:(state, action) =>{
            state.firstName = action.payload.firstName;
        },
        resetToInitialState:()=>{
            return initialState
        }
    },
});

export const {updateFirstName,resetToInitialState} = User.actions;

export default User.reducer;