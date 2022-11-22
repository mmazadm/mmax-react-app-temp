import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    isLoading: true,
    eventList:{
        List:[]
    },
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
        setEvent: (state, action) => {
            state.event = action.payload
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

export const { setEventsList, setEvent,
     setError, clearError, startLoading, stopLoading } = eventSlice.actions

export const fetchEventList = () => (dispatch) => {
    dispatch(startLoading())
    axios.get('/event/search/current/0/5')
    .then((res)=> {
        dispatch(clearError())
        dispatch(setEventsList(res.data))
    })
    .catch((err) => {
        console.log(err)
        dispatch(setError('Server error. Please try again'))
    })
}

export const fetchEvent = (eventId, sort, pageNumber, lotStatus, 
    username, breadcrumbs, filter ) => (dispatch) => {
    //if eventId is not same as currentEvent's ID
    dispatch(startLoading())
    axios.get(`/event/GetEventsDetails/${eventId}/${sort}/${pageNumber}/5/${lotStatus}/${username}?BreadCrumbs=${breadcrumbs}&StatusFilter=${filter}`)
    .then(res=>{
        dispatch(clearError())
        dispatch(setEvent({
            eventDetail:res.data.m_Item1,
            lots: res.data.m_Item2,
            lotCountsByCategory: res.data.m_Item3
        }))
    })
    .catch(err=>{
        console.log(err)
        dispatch(setError('Unable to get details. Please try again'))
    })
}

export default eventSlice.reducer;
