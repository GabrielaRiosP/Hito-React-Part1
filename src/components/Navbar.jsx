import '../components/Navbar.css'

const Navbar = () => {
const total = 25000;
const token = false;

return (
    <div className="menu">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pizzería Mamma Mía!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <button type="button" className="btn btn-dark btn-outline-light">🍕Home</button>
              <button type="button" className="btn btn-dark btn-outline-light">🔏Login</button>
              <button type="button" className="btn btn-dark btn-outline-light">🔓Register</button>
            </li>
            </ul>
            <ul className='navbar-nav'>
            <li className='nav-item-total'>
            <button type="button" className="btn btn-dark btn-outline-light">🛒Total : {total}</button>
            </li>
            </ul>
            
          
        </div>
        <div>
        {token ? (
          <span></span>
        ) : (
          <span></span>
        )}
      </div>
      </div>
    </nav>
    
  </div>
  );
}

export default Navbar


