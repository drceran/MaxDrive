import { NavLink } from 'react-router-dom';
// import NavDropDown from 'react-bootstrap';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <NavLink className="nav-item" to="/manufacturers">Manufacturers</NavLink>
        <NavLink className="nav-item" to="/manufacturers/new">Create Manufacture</NavLink>
        <NavLink className="nav-item" to="/automobiles">Automobiles</NavLink>
        <NavLink className="nav-item" to="/automobiles/new">Create An Automobile</NavLink>
        <NavLink className="nav-item me-3 active" to="/vehicles">Models</NavLink>
        <NavLink className="nav-item me-3 active" to="/vehicles/new">Create a Model</NavLink>
        <NavLink className="nav-item me-3 active" to="/technicians/">Technicians</NavLink>
        <NavLink className="nav-item me-3 active" to="/technicians/new">Add a Technician</NavLink>

        <NavLink className="nav-item me-3 active" to="/appointments/">Service Appointments</NavLink>
        <NavLink className="nav-item me-3 active" to="/appointments/new">Create a Service Appointment</NavLink>
        <NavLink className="nav-item me-3 active" to="servicehistory">Service History</NavLink>
        <NavLink className="nav-item" to="/salespeople">Salespeople</NavLink>
        <NavLink className="nav-item" to="/salespeople/new">Create Salesperson</NavLink>
        <NavLink className="nav-item" to="/customers/">Customers</NavLink>
        <NavLink className="nav-item" to="customers/new">Create Customer</NavLink>
        <NavLink className="nav-item" to="/sales/">Sales</NavLink>
        <NavLink className="nav-item" to="/sales/new">Record New Sale</NavLink>
        <NavLink className="nav-item" to="/sales/history/">Salesperson History</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        </div>
      </div>
    </nav>
  );
}

export default Nav;
