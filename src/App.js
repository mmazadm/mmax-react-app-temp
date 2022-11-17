import React from 'react';
import { useRoutes } from 'react-router-dom';
import appRoutes from './routes';
import axios from 'axios'

axios.defaults.baseURL = 'https://mmaxaw35migrate.azurewebsites.net/api';
//axios.defaults.baseURL = 'http://localhost:64580/api';
axios.defaults.headers.common['Authorization'] = 'RWX_BASIC admin:admin1234';
axios.defaults.headers.common['Content-Type'] = 'application/json';

function App() {
  const element = useRoutes(appRoutes);
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
