import React from 'react'

export default function Discover() {
  return (
		<div className="container search-container">	

		{/* Title div */}

			<div className="main-content-title artist-title">
				<h2>Discover <span className='text-accent'>millions</span> of artists and songs</h2>
			</div>

		{/* Search input, Radio inputs */}

			<div className="d-grid bg-dark spotifind-btn w-100">
			<button className="btn btn-success" type="button">SpotiFIND</button>
				</div>

			{/* Artist info display card */}

				<div className="card mb-3 artist-card bg-dark">
					<div className="row g-0">
						<div className="col-md-4">
							<img src={require("../images/artist.jpeg")} className="img-fluid rounded-start" alt="album cover" />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">Song: </h5>
								<p className="card-text">Artist: </p>
								<p className="card-text">Album: </p>
							</div>
						</div>
					</div>
				</div>

			{/* End of search-container */}

		</div>
	)
}