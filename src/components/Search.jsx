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




{/* <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
  <label className="form-check-label" for="inlineRadio1">Song</label>
</div>


<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
  <label class="form-check-label" for="inlineRadio2">Artist</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" ></input>
  <label class="form-check-label" for="inlineRadio3">Album</label>
</div> */}



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