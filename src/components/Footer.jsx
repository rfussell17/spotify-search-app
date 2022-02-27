import React from 'react'

export default function Footer() {
  return (
		<div className="footer ">
  		<footer className="d-flex flex-wrap justify-content-between align-items-center p-3 border-top expand">
    		<p className="col-md-4 mb-0 text-muted">&copy; 2021 Company, Inc</p>
    		<ul className="nav col-md-4 justify-center">
					<li className="nav-item"><a href="/home" class="nav-link px-2 text-muted">Home</a></li>
					<li className="nav-item"><a href="/search" class="nav-link px-2 text-muted">Search</a></li>
					<li className="nav-item"><a href="/discover" class="nav-link px-2 text-muted">Discover</a></li>
    		</ul>
  		</footer>
		</div>
	)
}
