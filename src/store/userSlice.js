import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    isLoading: false,
    authenticated: false,
    user:{},
    error: false,
    errorMessage:'',
    summary:{}
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
        setSummary: (state, action) => {
            state.summary = action.payload
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
    startLoading, stopLoading, setSummary } = userSlice.actions

export const login = (formValues, navigate) => (dispatch) => {
    dispatch(startLoading())
    dispatch(clearError())
    axios.post('/system/login',formValues)
    .then((res)=> {
        localStorage.setItem('mmx_token', `${formValues.username}:${res.data.token}`)
        axios.defaults.headers.common['Authorization'] = `${formValues.username}:${res.data.token}`;
        axios.get(`/user/${formValues.username}`)
        .then(res=>{
            dispatch(setUser(res.data))
            navigate('/account/summary', {replace:true})
        })
    })
    .catch((err) => {
        dispatch(clearUser())
        if(err.response.status === 400){
            dispatch(setError('Username and password do not match'))
        } else
        dispatch(setError(err.message))
    })
    //dispatch(setUser({username: formValues.username}))
}

export const logout = (navigate, pathname) => (dispatch) => {
    localStorage.removeItem('mmx_token')
    dispatch(clearUser())
    navigate(pathname)
}

export const fetchUserDetails = () => (dispatch) => {
    let username = localStorage.getItem('mmx_token').split(':')[0]
    axios.get(`/user/${username}`)
    .then(res=>{
        dispatch(setUser(res.data))
    })
    .catch((err)=> {
        console.log(err)
        dispatch(logout())

    })
}

export const fetchAccountSummary=()=> (dispatch, getState) => {
    dispatch(startLoading())
    const username = getState().user.username
    axios.get(`/user//summarycount/${username}`)
    .then(res=>{
        dispatch(setSummary(res.data[0]))
    })
    .catch(err=>{
        console.log(err)
        dispatch(stopLoading())
    })
}

export default userSlice.reducer;
