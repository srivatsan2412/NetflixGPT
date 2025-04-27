import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: true,
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            state.showGPTSearch = !state.showGPTSearch;
        }
    }
})

export const {toggleGPTSearchView} = gptSlice.actions;

export default gptSlice.reducer;