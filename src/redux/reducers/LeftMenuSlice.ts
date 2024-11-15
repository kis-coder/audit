import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PagesNames, Routes } from "../../type";

const initialState: PagesNames = {
    name: 'admin',
    isPageLoading: false 
}

export const leftMenuSlice = createSlice({
    name: 'pageName',
    initialState,
    reducers: {
        routeTo (state, action: PayloadAction<Routes>){
            state.name = action.payload
        }
    }
})

export default leftMenuSlice.reducer; 