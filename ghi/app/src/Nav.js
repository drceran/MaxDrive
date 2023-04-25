import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">CarCar</NavLink>
              <NavLink className="nav-item" to="/manufacturers">Manufacturers</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
              </div>
            </div>
          </nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
