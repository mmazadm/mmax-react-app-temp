import React from 'react';
import { useRoutes } from 'react-router-dom';
import appRoutes from './routes';

function App() {
  const element = useRoutes(appRoutes);
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
