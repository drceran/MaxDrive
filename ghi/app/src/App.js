import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import VehicleList from './VehicleList';
import VehicleForm from './VehicleForm';
import ManufacturerList from './ManufacturerList';
import ManufacturerCreate from './ManufacturerCreate';
import AutomobileList from './AutomobileList';
import AutomobileCreate from './AutomobileCreate';


function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>

          <Route path="/" element={<MainPage />} />

          <Route path="manufacturers">
            <Route index element={<ManufacturerList manufacturers={props.manufacturers} />} />
            <Route path="new" element={<ManufacturerCreate />} />
          </Route>

          <Route path="vehicles">
            <Route index element={<VehicleList vehicles={props.vehicles} />} />
            <Route path="new" element={<VehicleForm />} />
          </Route>

        <Route path="automobiles">
          <Route index element={<AutomobileList />} />
          <Route path="new" element={<AutomobileCreate />} />
        </Route>

      </Routes>
    </div>
    </BrowserRouter >
  );
}

export default App;
