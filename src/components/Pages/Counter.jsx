import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../features/counter/counterSlice";

export function Counter() {
    const dispatch = useDispatch();
    const voteCount = useSelector((state) => state.counter.voteCount);

    return (
        <div>
            <p>Votes : {voteCount}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}
