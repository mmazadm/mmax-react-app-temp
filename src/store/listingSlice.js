import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    loadingListings: true,
    loadingCats: true,
    categoriesWithCount:[{
        list:[],
        count:{}
    }],
    currentCategory:{},
    listings:{
        list:[]
    },
    listing:{},
    listingTypes:['All', 'Fixed Price','Auction','Classified'],
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
        setListingTypes: (state, action) => {
            state.listingTypes = action.payload
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
    setListingTypes,
     setError, clearError, startLoading, stopLoading } = listingSlice.actions

export const fetchListings = (pageNumber,pageSize, sort) => (dispatch) => {
    dispatch(startLoading())
    axios.get(`/listing/search/${pageNumber}/${pageSize}/${sort}?Statuses=active`)
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
        `/listing/search/${pageNumber}/${pageSize}/0?Statuses=active&breadcrumbs=C${breadcrumbs}`
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
    axios.get('/listing/getlistingscountbycategory')
    .then((res)=> {
        dispatch(clearError())
        dispatch(setCategories({
            list:res.data.item1,
            counts: res.data.item2
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

export const fetchListingTypes = () => (dispatch, initialState) => {
    axios.get('/listing/types')
    .then(res=> {
        let types = res.data.filter(i=> i.enabled).map(i=> i.name)
        types.push('All')
        dispatch(setListingTypes(types))
    })
    .catch(()=> dispatch(setListingTypes(initialState.listingTypes)))
}

export default listingSlice.reducer;