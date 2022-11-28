import React, {useEffect} from 'react';
import axios from 'axios'
import { useRoutes } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import appRoutes from './routes';
import { fetchCategoryListWithCounts, fetchListingTypes } from './store/listingSlice';
import { fetchUserDetails } from './store/userSlice';

const token = localStorage.getItem('mmx_token')
//axios.defaults.baseURL = 'https://mmaxaw35migrate.azurewebsites.net/api';
//axios.defaults.baseURL = 'http://localhost:64580/api';
axios.defaults.baseURL = 'https://mmax-api-wrapper.azurewebsites.net/api';
if(token){
axios.defaults.headers.common['Authorization'] = `RWX_SECURE ${token}`;
}
//axios.defaults.headers.commom['Date'] = new Date();

function App() {
  const element = useRoutes(appRoutes);
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchCategoryListWithCounts())
    dispatch(fetchListingTypes())
    if(token){
      dispatch(fetchUserDetails())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  window.scrollTo(0, 0)
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
