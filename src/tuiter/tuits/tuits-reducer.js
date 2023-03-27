import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "../images/nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        deleteTuit(state, action) {
            const index = state
            .findIndex(tuit =>
            tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        toggleLikeData(state, action) {
            const tuitToUpdate = state.find(t => t._id === action.payload);
            if (tuitToUpdate.liked) {
                tuitToUpdate.liked = false;
                tuitToUpdate.likes = tuitToUpdate.likes - 1;
            } else {
                tuitToUpdate.liked = true;
                tuitToUpdate.likes = tuitToUpdate.likes + 1;
            }
        }
    } 
});

export const {createTuit, deleteTuit, toggleLikeData} = tuitsSlice.actions;
export default tuitsSlice.reducer;
