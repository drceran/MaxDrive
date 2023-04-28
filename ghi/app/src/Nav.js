import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <NavDropdown title="Inventory" id="inventory-dropdown">
          <NavDropdown title="Manufacturers" drop="end" id="manufacturers-dropdown">
            <NavDropdown.Item href="/manufacturers">Manufacturers list</NavDropdown.Item>
            <NavDropdown.Item href="/manufacturers/new">Add a manufacturer</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Vehicles" drop="end" id="vehicles-dropdown">
            <NavDropdown.Item href="/vehicles">Vehicles</NavDropdown.Item>
            <NavDropdown.Item href="/vehicles/new">Add a vehicle</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Automobiles" drop="end" id="autos-dropdown">
              <NavDropdown.Item href="/automobiles">Automobiles</NavDropdown.Item>
              <NavDropdown.Item href="/automobiles/new">Add a automobile</NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>
        <NavDropdown title="Services" id="services-dropdown">
          <NavDropdown title="Technicians" drop="end" id="technicians-dropdown">
            <NavDropdown.Item href="/manufacturers">Technicians list</NavDropdown.Item>
            <NavDropdown.Item href="/manufacturers/new">Add a technician</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Service Appointments" drop="end" id="appointments-dropdown">
              <NavDropdown.Item href="/appointments">Appointments list</NavDropdown.Item>
              <NavDropdown.Item href="/appointments/new">Make an appointment</NavDropdown.Item>
              <NavDropdown.Item href="/appointments/history">Service history</NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>
        <NavDropdown title="Sales" className="nav-link-all" id="sales-dropdown">
            <NavDropdown title="Salespeople" drop="end" id="salespeople-dropdown">
              <NavDropdown.Item href="/salespeople">Salespeople list</NavDropdown.Item>
              <NavDropdown.Item href="/salespeople/new">Add a salesperson</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Customers" drop="end" id="customers-dropdown">
                <NavDropdown.Item href="/customers">Customers list</NavDropdown.Item>
                <NavDropdown.Item href="/customers/new">Add a customer</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sales" drop="end" id="saless-dropdown">
              <NavDropdown.Item href="/sales">Sales list</NavDropdown.Item>
              <NavDropdown.Item href="/sales/new" >Record a new sale</NavDropdown.Item>
              <NavDropdown.Item href="/sales/history/">Salesperson History</NavDropdown.Item>
            </NavDropdown>
        </NavDropdown>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"> </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
