import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlices";

const store = configureStore({
    reducer: {
        users: UserSlice,
    }
});

export default store;