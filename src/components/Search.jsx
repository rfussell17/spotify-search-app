import React from 'react'

export default function Search() { 
  return (
		<div className="container search-container">
			<div className="main-content-title artist-title">
			<h2><span className='text-accent'>Artist</span> Search</h2>
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