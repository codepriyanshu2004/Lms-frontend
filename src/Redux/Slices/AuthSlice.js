
import {createSlice} from "@reduxjs/toolkit"
import { data } from "react-router-dom"

const initailState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    role: localStorage.getItem("role") || "",
    data: localStorage.getItem("data") || {}
}

const authSlice = createSlice({
    name:"auth",
    initailState,
    reducers:{},
})

export const {} = authSlice.actions;
export default authSlice.reducer;