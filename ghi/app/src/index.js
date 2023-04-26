import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { func } from 'prop-types';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const loadVehicles = async () =>{
  const response = await fetch("http://localhost:8100/api/models/")
  if (response.ok){
    const data = await response.json();
    root.render(<App vehicles={data.models} />);
  }
}

loadVehicles();

