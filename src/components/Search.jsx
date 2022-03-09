import React from 'react'

export default function Search() { 
  return (
		<div className="container search-container">
			<div className="main-content-title artist-title">
				<h2><span className='text-accent'>Search</span> millions of artists and songs</h2>

				<div className="row g-3 align-items-center">
					<div className="col-auto">
						<input type="text" id="input-form" className="form-control" aria-describedby="text search box" />
					</div>
					<div className="col-auto">
						<span id="input-form-text" className="form-text text-light">
						</span>
					</div>
				</div>
			</div>

			<div className="card mb-3 artist-card bg-dark">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={require("../images/artist.jpeg")} className="img-fluid rounded-start" alt="album cover" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Artist:</h5>
        <p className="card-text">Song Name</p>
				<p className="card-text">Album Name</p>
      </div>
    </div>
  </div>
</div>




		</div>

	)
}