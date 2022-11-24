import { createSlice } from "@reduxjs/toolkit";
//import axios from 'axios'

const initialState = {
    isLoading: false,
    authenticated: false,
    user:{},
    error: false,
    errorMessage:''
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.authenticated = true
            state.isLoading = false
        },
        setError: (state, action) => {
            state.error = true
            state.errorMessage = action.payload
            state.isLoading = false
        },
        clearError: (state) => {
            state.error = false
            state.errorMessage = false
        },
        clearUser: (state) => {
            state.user={}
            state.authenticated = false
        },
        startLoading: (state) => {state.isLoading = true},
        stopLoading: (state) => {state.isLoading = false}
    }
})

export const { setUser, clearUser, setError, clearError, 
    startLoading, stopLoading } = userSlice.actions

export const login = (formValues) => (dispatch) => {
    dispatch(startLoading())
    dispatch(clearError())
    /*axios.post('/login',formValues)
    .then((res)=> {
        localStorage.setItem('mmx_token', res.data.token)
        axios.get(`/user/${formValues.username}`)
        .then(res=>{
            dispatch(setUser(res.data))
        })
    })
    .catch((err) => {
        console.log(err)
        dispatch(clearUser())
        dispatch(setError(err.message))
    })*/
    dispatch(setUser({username: formValues.username}))
}

export default userSlice.reducer;
