import { configureStore } from "@reduxjs/toolkit";
import counterslice from "../features/counters/counterslice";
import postsSlice from "../features/counters/posts/postsSlice";

const store = configureStore({
    reducer: {
        counters: counterslice,
        posts: postsSlice,
    },
});
export default store;
