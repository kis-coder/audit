import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import { postApi } from "../service/PostService";
import leftMenuReducer from "./reducers/LeftMenuSlice";


const rootReducer = combineReducers({
    userReducer,
    leftMenuReducer,
    [postApi.reducerPath]: postApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware) 
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

