import {Link} from 'react-router-dom';

function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg bg-primary fixed-top px-2 mb-5">
      <div className="container-fluid align-items-center ">
        <Link className="navbar-brand fw-bold" to="/">eL</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-center align-items-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item text-center">
              <Link className="nav-link active fw-bolder" aria-current="page" to="/">Home</Link>
            </li>
          </ul>
          <div className="text-center" >
            <Link className="btn btn-outline-dark me-2" to='/Register' type="button">Sign-up</Link>
            <Link className="btn  btn-outline-dark" to='/Login' type="button">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

