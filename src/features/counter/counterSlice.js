import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    voteCount: 0, 
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.voteCount += 1;
        },
        decrement: (state) => {
            if (state.voteCount > 0) state.voteCount -= 1;
        },
        setInitialVotes: (state, action) => {
            state.voteCount = action.payload; 
        },
    },
});

export const { increment, decrement, setInitialVotes } = counterSlice.actions;

export default counterSlice.reducer;
