import { configureStore } from "@reduxjs/toolkit";
import DataSliceReducer from './DataSlice'

export const store = configureStore({
    reducer: {
        users: DataSliceReducer
    }
})