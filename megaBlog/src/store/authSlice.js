
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null
}

const authSclice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state,action) => {
                state.status = true;
                state.userData = action.payload.userData;
        }
    }
});


export default authSclice.reducer;