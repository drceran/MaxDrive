import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <NavLink className="nav-item" to="/manufacturers">Manufacturers</NavLink>
        <NavLink className="nav-item" to="/manufacturers/new">Create Manufacture</NavLink>
        <NavLink className="nav-item" to="/automobiles">Automobiles</NavLink>
        <NavLink className="nav-item me-3 active" to="/vehicles">Models</NavLink>
        <NavLink className="nav-item me-3 active" to="/vehicles/new">Create a model</NavLink>
        {/* <NavLink className="nav-item me-3 active" to="/vehicles/new">Create a model</NavLink> */}
        <NavLink className="nav-item me-3 active" to="/technicians/new">Add a technician</NavLink>
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
