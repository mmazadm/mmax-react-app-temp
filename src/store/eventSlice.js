import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    isLoading: true,
    eventList:{},
    event:{},
    error: false,
    errorMessage:''
}

export const eventSlice = createSlice({
    name:'events',
    initialState,
    reducers: {
        setEventsList: (state, action) => {
            state.eventList = action.payload
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
        startLoading: (state) => {state.isLoading = true},
        stopLoading: (state) => {state.isLoading = false}
    }
})

export const { setEventsList, setError, clearError, startLoading, stopLoading } = eventSlice.actions

export const fetchEventList = () => (dispatch) => {
    dispatch(startLoading())
    axios.get('/event/search/current/0/5')
    .then((res)=> {
        dispatch(setEventsList(res.data))
    })
    .catch((err) => {
        console.log(err)
        dispatch(setError('Some error'))
    })
}

export default eventSlice.reducer;
