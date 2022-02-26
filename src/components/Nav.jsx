// import Navbar from 'react-bootstrap/navbar';


export default function Nav() {
  return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
  			<div className="container-fluid">
    			<a className="navbar-brand" href="/home">SpotiFIND</a>
    			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      			<span className="navbar-toggler-icon"></span>
    			</button>
    			<div className="collapse navbar-collapse" id="navbarText">
      			<ul className="navbar-nav m-auto ml-5 mb-2 mb-lg-0">
        			<li className="nav-item">
          			<a className="nav-link active" aria-current="page" href="/home">Home</a>
        			</li>
        			<li className="nav-item">
          			<a className="nav-link" href="/search">Search</a>
        			</li>
        			<li className="nav-item">
          			<a className="nav-link" href="/discover">Discover</a>
        			</li>
      			</ul>
    			</div>
  			</div>
			</nav>
		)
}