import "../index.css";
import Search from "./Search";

function MovieCard({movie}) {
 return (
  <div className="movie-card">
   <div className="movie-image">
    <img
     src={movie.show.image.medium}
     alt="movie"
    />
   </div>

   <h3 className="movie-heading">{movie.show.name}</h3>
   {/* <p>{movie.show.type}</p> */}
   <ul className="list">
    {movie.show.genres.map(genre => (
    <li>{genre}</li>
    ))}
   </ul>
   <button><a href={movie.show.url}>Watch Now</a></button>
  </div>
 );
}

export default MovieCard;
