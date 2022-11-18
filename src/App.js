import React, {useEffect} from 'react';
import axios from 'axios'
import { useRoutes } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import appRoutes from './routes';
import { fetchCategoryList } from './store/listingSlice';


axios.defaults.baseURL = 'https://mmaxaw35migrate.azurewebsites.net/api';
//axios.defaults.baseURL = 'http://localhost:64580/api';
//axios.defaults.baseURL = 'https://machinerymax.com/api'
axios.defaults.headers.common['Authorization'] = 'RWX_BASIC admin:admin1234';
axios.defaults.headers.common['Content-Type'] = 'application/json';

function App() {
  const element = useRoutes(appRoutes);
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchCategoryList())
  },[dispatch])
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
