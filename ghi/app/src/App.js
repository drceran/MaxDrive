import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import VehicleList from './VehicleList';
import VehicleForm from './VehicleForm';
import ManufacturerList from './ManufacturerList';
import ManufacturerCreate from './ManufacturerCreate';
import AutomobileList from './AutomobileList';
import TechnicianForm from './TechnicianForm'
import TechnicianList from './TechnicianList';
import AppointmentForm from './AppointmentForm';


function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route index element={<ManufacturerList manufacturers={props.manufacturers} />} />
          </Route>
          <Route>
          <Route path="/manufacturers/new" element={<ManufacturerCreate />} />
        </Route>
          <Route path="vehicles">
            <Route index element={<VehicleList vehicles={props.vehicles} />} />
            <Route path="new" element={<VehicleForm />} />
          </Route>
          <Route path="technicians">
            <Route index element={<TechnicianList />} />
            <Route path="new" element={<TechnicianForm />} />
          </Route>
          <Route path="appointments">
            {/* <Route index element={<TechnicianList />} /> */}
            <Route path="new" element={<AppointmentForm />} />
          </Route>
        <Route path="automobiles">
          <Route index element={<AutomobileList />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter >
  );
}

export default App;
