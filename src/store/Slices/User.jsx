import {createSlice} from '@reduxjs/toolkit'

const initialState = [{
    name : '',
    status : false,
}];

const User =  createSlice({
    name : 'user',
    initialState,
    reducers : {
        addToData(state,action){
            state[0] = action.payload;
        },
        removeToData(state,action){
            state[0] = {'status' : false};
        }
    }
})

export default User;
export const {addToData,removeToData}  = User.actions;