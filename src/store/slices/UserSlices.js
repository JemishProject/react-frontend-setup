import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("getUsers", async (e) => {
    console.log("e", e)
    // const response = await call api
    const response = {
        name:"jemish"
    }
    return response;
})

const UserSlice = createSlice({
    name: "users",
    initialState: {
        isLoading: false,
        isError: false,
        data: null
    },
    //simple reducers
        // reducers: {
        //     addUser(state, action) {},
        //     removeUser(state, action) {},
        //     deleteAllUser(state, action) {}
        // }
    // make a strong structure for api call
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        },
        [getUsers.rejected]: (state, action) => {
            console.log("action", action)
            state.isError = true;
        }
    }
});

export default UserSlice.reducer;
// export const { addUser } = UserSlice.actions;