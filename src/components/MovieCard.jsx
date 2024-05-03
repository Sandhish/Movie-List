import PropTypes from 'prop-types';

const MovieCard = (props) => {
  return (
    <div className="movie-card-wrapper" style={{ marginLeft: "40px" }}>
      <div className="card p-1 m-5" style={{ width: "20rem"}}>
        <img src={props.image} className="card-img-top" style={{ height: "400px" }} alt="Poster Image" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <a href="#" className="btn btn-primary">Watch</a>
        </div>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string
}

export { MovieCard }
