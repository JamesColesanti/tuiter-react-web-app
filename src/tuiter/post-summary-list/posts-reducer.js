import { createSlice } from "@reduxjs/toolkit";
import postsArray from './posts.json';

const postsSlice = createSlice({
    name: "posts",
    initialState: postsArray
});

export default postsSlice.reducer;
