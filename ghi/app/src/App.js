import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import MainPage from './MainPage';
import NavigationBar from './Nav';
import VehicleList from './VehicleList';
import VehicleForm from './VehicleForm';
import ManufacturerList from './ManufacturerList';
import ManufacturerCreate from './ManufacturerCreate';
import AutomobileList from './AutomobileList';
import AutomobileCreate from './AutomobileCreate';
import TechnicianForm from './TechnicianForm'
import TechnicianList from './TechnicianList';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import Servicehistory from './Servicehistory';
import SalespeopleList from './SalespeopleList';
import CustomerList from './CustomerList';
import SalesList from './SalesList';
import SalespeopleCreate from './SalespeopleCreate';
import CustomerCreate from './CustomerCreate';
import SaleCreate from './SaleCreate';
import SalespersonHistory from './SalespersonHistory';


function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route index element={<ManufacturerList />} />
            <Route path="new" element={<ManufacturerCreate />} />
          </Route>
          <Route path="vehicles">
            <Route index element={<VehicleList />} />
            <Route path="new" element={<VehicleForm />} />
          </Route>
          <Route path="technicians">
            <Route index element={<TechnicianList />} />
            <Route path="new" element={<TechnicianForm />} />
          </Route>
          <Route path="appointments">
            <Route index element={<AppointmentList />} />
            <Route path="new" element={<AppointmentForm />} />
            <Route path="history" element={<Servicehistory />} />
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList />} />
            <Route path="new" element={<AutomobileCreate />} />
          </Route>
          <Route path="salespeople">
            <Route index element={<SalespeopleList />} />
            <Route path="new" element={<SalespeopleCreate />} />
          </Route>
          <Route path="customers">
            <Route index element={<CustomerList />} />
            <Route path="new" element={<CustomerCreate />} />
          </Route>
          <Route path="sales">
            <Route index element={<SalesList />} />
            <Route path="new" element={<SaleCreate />} />
            <Route path="history" element={<SalespersonHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
