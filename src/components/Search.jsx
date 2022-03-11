import React from 'react'

export default function Search() { 
  return (
		<div className="container search-container">	

		{/* Title div */}

			<div className="main-content-title artist-title">
				<h2>Search <span className='text-accent'>millions</span> of artists and songs</h2>
			</div>

		{/* Search input, Radio inputs */}

			<div className="input-group bg-dark">
					<input type="text" className="form-control bg-dark text-light text-muted" aria-label="Text input with radio button"></input>
					<div className="input-group-text bg-dark text-light">
						<input className="form-check-input mt-0" type="radio" value="" id="song" aria-label="Radio button for song category"></input>
						<label className="form-check-label" for="song"><span className="radio-span">Song</span></label>
					</div>
					<div className="input-group-text bg-dark text-light">
						<input className="form-check-input mt-0" type="radio" value="" id="artist" aria-label="Radio button for artist category"></input>
						<label className="form-check-label" for="artist"> <span className="radio-span">Artist</span></label>
					</div>
					<div className="input-group-text bg-dark text-light">
						<input className="form-check-input mt-0" type="radio" value="" id="album" aria-label="Radio button for album category"></input>
						<label className="form-check-label" for="album"><span className="radio-span">Album</span></label>
					</div>
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