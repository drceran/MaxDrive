import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList';
import ManufacturerCreate from './ManufacturerCreate';
import AutomobileList from './AutomobileList';


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
          <Route path="/manufacturers/new" element={<ManufacturerCreate />} />
          <Route path="automobiles">
            <Route index element={<AutomobileList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
