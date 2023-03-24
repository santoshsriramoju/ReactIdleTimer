import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "dataSlice",
    initialState: {
        registeredUsers: [],
        isLoggedIn: false,
        showModal: false,
    },
    reducers: {
        registerUser: (state, action) => {
            state.registeredUsers.push({ username: action.payload.username, password: action.payload.password })
        },
        showModal: (state) => {
            state.showModal = true
        },
        hideModal: (state) => {
            state.showModal = false
        },
        login:(state)=>{
            state.isLoggedIn = true
        },
        logout:(state)=>{
            state.isLoggedIn = false
        }
    }
})

export const { registerUser, showModal, hideModal, login, logout } = dataSlice.actions;
export default dataSlice.reducer;