import { useState } from "react";

const Navbar = () => {
  const [movie, setMovie] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setMovie(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isMovieInList = false;
    if (!isMovieInList) {
      setErrorMessage(`${movie} is not in the list`);
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary p-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h2>Movie List</h2>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto me-2 mb-lg-0" role="search" onSubmit={handleSubmit}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={movie} onChange={handleInputChange} />
              <button className="btn btn-outline-secondary-subtle" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div style={{marginLeft: "74rem", color: "red", fontSize:"20px", padding:"10px"}}>
        {errorMessage}
      </div>

    </div>
  );
};

export { Navbar };
