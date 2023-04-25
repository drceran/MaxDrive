import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


async function loadManufacturerDetails() {
  const manufacturerResponse = await fetch('http://localhost:8080/api/manufacturers/');

  if (manufacturerResponse.ok) {
    const data = await manufacturerResponse.json();
    console.log(data);
    root.render(
      <React.StrictMode>
        <App manufacturerdetails={data.manufacturer} />
      </React.StrictMode>
    );
  } else {
    console.error(manufacturerResponse);
  }
}
loadManufacturerDetails();

const loadVehicles = async () =>{
  const response = await fetch("http://localhost:8100/api/models/")
  if (response.ok){
    const data = await response.json();
    root.render(<App vehicles={data.models} />);
  }
}

loadVehicles();
