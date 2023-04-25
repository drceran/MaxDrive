import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import VehicleList from './VehicleList';
import VehicleForm from './VehicleForm';
import ManufacturerList from './ManufacturerList';
import ManufacturerCreate from './ManufacturerCreate';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route index element={<ManufacturerList manufacturers={props.manufacturers} />}/>
            </Route>
            <Route path="/manufacturers/new" element={<ManufacturerCreate />} />

          {/* <Route path="/" element={<ManufacturerForm />} /> */}
          <Route path="vehicles">
            <Route index element={<VehicleList vehicles = {props.vehicles}/>} />
            <Route path="new" element={<VehicleForm />} />
          </Route>
          {/* <Route path="/" element={<AutoList />} /> */}
          {/* <Route path="/" element={<AutoForm />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
