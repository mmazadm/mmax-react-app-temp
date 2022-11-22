import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    loadingListings: true,
    loadingCats: true,
    categoriesWithCount:[{
        List:[],
        count:{}
    }],
    currentCategory:{},
    listings:{
        List:[]
    },
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
            state.loadingListings = false
        },
        setCategories: (state, action) => {
            state.categoriesWithCount = action.payload
            state.loadingCats = false
        },
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload
        },
        setError: (state, action) => {
            state.error = true
            state.errorMessage = action.payload
        },
        clearError: (state) => {
            state.error = false
            state.errorMessage = false
        },
        startLoading: (state) => {state.loadingListings = true},
        stopLoading: (state) => {state.loadingListings = false}
    }
})

export const { setListings, setCategories, setCurrentCategory,
     setError, clearError, startLoading, stopLoading } = listingSlice.actions

export const fetchListings = (pageNumber,pageSize) => (dispatch) => {
    dispatch(startLoading())
    axios.get(`/listing/search/${pageNumber}/${pageSize}/0?Statuses=active`)
    .then((res)=> {
        dispatch(clearError())
        dispatch(setCurrentCategory({}))
        dispatch(setListings(res.data))
    })
    .catch((err) => {
        console.log(err)
        dispatch(setError('Server error. Please try again'))
        dispatch(stopLoading())
    })
}

export const fetchListingsByCategory = (pageNumber,pageSize,breadcrumbs) => (dispatch) => {
    dispatch(startLoading())
    const endpoints = [
        `/category/${breadcrumbs}`,
        `/category/children/${breadcrumbs}`,
        `/listing/search/0/5/0?Statuses=active&BreadCrumbs=C${breadcrumbs}`
    ]
    axios
    .all(endpoints.map(point => axios.get(point)))
    .then(res=> {
        dispatch(clearError())
        dispatch(setCurrentCategory({...res[0].data, children:res[1].data}))
        dispatch(setListings(res[2].data))
    })
    .catch((err) => {
        console.log(err)
        dispatch(setError('Server error. Please try again'))
        dispatch(stopLoading())
    })
}

export const fetchCategoryListWithCounts = () => (dispatch) => {
    axios.get('/listing/GetListingsCountByCategory')
    .then((res)=> {
        dispatch(clearError())
        dispatch(setCategories({
            List:res.data.m_Item1,
            counts: res.data.m_Item2
        }))
    })
    .catch((err) => {
        console.log(err)
        dispatch(setError('Server error. Please try again'))
        dispatch(setCategories({
            List:[],
            counts: {}
        }))
    })
}

export const fetchCurrentCategory = (id) => (dispatch) => {
    dispatch(startLoading())
    const endpoints = [
        `/category/${id}`,
        `/category/children/${id}`
    ]
    axios
    .all(endpoints.map(point => axios.get(point)))
    .then(res=> {
        dispatch(clearError())
        dispatch(setCurrentCategory({...res[0].data, children:res[1].data}))
    })
    .catch((err) => {
        console.log(err)
        dispatch(setError('Server error. Please try again'))
        dispatch(stopLoading())
    })
}

export default listingSlice.reducer;