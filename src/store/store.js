import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import eventReducer from './eventSlice'
import listingReducer from './listingSlice'

const combinedReducer = combineReducers({
    events: eventReducer,
    listings: listingReducer
})

export const store = configureStore({
    reducer: combinedReducer
})