import axios from "axios"
import { AppDispatch } from "../store"
import { IUser } from "../../models/IUser"
import { usersSlice } from "./UserSlice"
import { leftMenuSlice } from "./LeftMenuSlice"
import { Routes } from "../../type"

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    {
        try {
            dispatch(usersSlice.actions.usersFetching())
            const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            dispatch(usersSlice.actions.userSuccess(responce.data))
        } catch (e: any) {
            console.error(e)
            dispatch(usersSlice.actions.userError(e.message))
        }

    }
}

export const routePage = (payload: Routes) => (dispatch: AppDispatch) => {
    {
        console.log(payload)
        dispatch(leftMenuSlice.actions.routeTo(payload))
    }
}
