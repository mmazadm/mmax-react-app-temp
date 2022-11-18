import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    isLoading: true,
    categories:[],
    currentCategory:{},
    listings:{},
    listing:{},
    error: false,
    errorMessage:''
}

export const listingSlice = createSlice({
    name:'listings',
    initialState,
    reducers: {
        setListings: (state, action) => {
            state.listings = action.payload
            state.isLoading = false
        },
        setCategories: (state, action) => {
            state.categories = action.payload
        },
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload
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

export const { setListings, setCategories, setCurrentCategory,
     setError, clearError, startLoading, stopLoading } = listingSlice.actions

export const fetchListings = (pageNumber,pageSize) => (dispatch) => {
    dispatch(startLoading())
    axios.get(`/listing/search/${pageNumber}/${pageSize}/0?Statuses=active`)
    .then((res)=> {
        dispatch(setListings(res.data))
    })
    .catch((err) => {
        console.log(err)
        dispatch(setError('Some error'))
    })
}

export const fetchListingsByCategory = (pageNumber,pageSize,breadcrumbs) => (dispatch) => {
    dispatch(startLoading())
    const endpoints = [
        `/category/${breadcrumbs}`,
        `/listing/search/0/5/0?Statuses=active&BreadCrumbs=C${breadcrumbs}`
    ]
    axios
    .all(endpoints.map(point => axios.get(point)))
    .then(res=> {
        dispatch(setCurrentCategory(res[0].data))
        console.log(res[1].data)
        dispatch(setListings(res[1].data))
    })
    .catch((err) => {
        console.log(err)
        dispatch(setError('Some error'))
    })
}

export const fetchCategoryList = () => (dispatch) => {
    axios.get('/category/children/9')
    .then((res)=> {
        dispatch(setCategories(res.data))
    })
    .catch((err) => {
        console.log(err)
        dispatch(setError('Some error'))
    })
}

export const fetchCategoryDetails = (id) => (dispatch) => {
    axios.get(`/category/${id}`)
    .then((res)=> {
        dispatch(setCurrentCategory(res.data))
    })
    .catch((err) => {
        console.log(err)
        dispatch(setError('Some error'))
    })
}

export default listingSlice.reducer;