import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/" element={<ManufacturerList />} /> */}
          {/* <Route path="/" element={<ManufacturerForm />} /> */}
          {/* <Route path="/" element={<VehicleList />} /> */}
          {/* <Route path="/" element={<VehicleForm />} /> */}
          {/* <Route path="/" element={<AutoList />} /> */}
          {/* <Route path="/" element={<AutoForm />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
