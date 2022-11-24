import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import eventReducer from './eventSlice'
import listingReducer from './listingSlice'
import userReducer from './userSlice'

const combinedReducers = combineReducers({
    events: eventReducer,
    listings: listingReducer,
    user: userReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, combinedReducers)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)