import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false
    },
    reducers: {
        isAuthenticated: (state, action) => {
            state.isAuthenticated = true;
        }   
    }
})
export const { isAuthenticated } = userSlice.actions;
export const selectUser = state => {
    console.log(state.user)
    return state.user.isAuthenticated
}
export default userSlice.reducer