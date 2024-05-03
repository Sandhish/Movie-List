import PropTypes from 'prop-types'

const MovieCard = (props) => {
  return (
    <div class="card p-1 m-5" style={{ width: "20rem" }}>
      <img src={props.image} class="card-img-top" style={{ height: "400px" }} alt="Poster Image" />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.desc}</p>
        <a href="#" class="btn btn-primary">Watch</a>
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