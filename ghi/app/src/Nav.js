import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <NavDropdown title="Inventory" id="inventory-dropdown">
          <NavDropdown title="Manufacturers" drop="end">
            <NavDropdown.Item href="/manufacturers">Manufacturers List</NavDropdown.Item>
            <NavDropdown.Item href="/manufacturers/new">Add a manufacturer</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Vehicles" drop="end">
            <NavDropdown.Item href="/vehicles">Vehicles</NavDropdown.Item>
            <NavDropdown.Item href="/vehicles/new">Add a vehicle</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Automobiles" drop="end">
              <NavDropdown.Item href="/automobiles">Automobiles</NavDropdown.Item>
              <NavDropdown.Item href="/automobiles/new">Add a automobile</NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>
        <NavDropdown title="Services" id="services-dropdown">
          <NavDropdown title="Technicians" drop="end">
            <NavDropdown.Item href="/manufacturers">Manufacturers List</NavDropdown.Item>
            <NavDropdown.Item href="/manufacturers/new">Add a manufacturer</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Service Appointments" drop="end">
              <NavDropdown.Item href="/appointments">Appointments List</NavDropdown.Item>
              <NavDropdown.Item href="/appointments/new">Make an appointment</NavDropdown.Item>
              <NavDropdown.Item href="/servicehistory">Service history</NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>
        <NavDropdown title="Sales" id="services-dropdown">
            <NavDropdown title="Salespeople" drop="end">
              <NavDropdown.Item href="/salespeople">Salespeople List</NavDropdown.Item>
              <NavDropdown.Item href="/salespeople/new">Add a salesperson</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Customers" drop="end">
                <NavDropdown.Item href="/customers">Customers List</NavDropdown.Item>
                <NavDropdown.Item href="/customers/new">Add a customer</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sales" drop="end">
              <NavDropdown.Item href="/sales">Salespeople List</NavDropdown.Item>
              <NavDropdown.Item href="/sales/new">Add a salesperson</NavDropdown.Item>
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
