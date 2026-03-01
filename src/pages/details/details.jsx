import styles from './details.module.css'
import { useParams, useNavigate } from "react-router-dom"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { movies } from "../../data/movies"

export default function MovieDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [favourites, setFavorites] = useLocalStorage("favourites", [])

    const movie = movies.find(m => m.id === parseInt(id))
    const isFavorite = favourites.some(f => f.id === movie.id)

    const toggleFavorite = () => {
        if (isFavorite) {
            setFavorites(favourites.filter(f => f.id !== movie.id))
        } else {
            setFavorites([...favourites, movie])
        }
    }

    if (!movie) 
        return <p>Movie not found.</p>

    return (
        <div>
            <button onClick={() => navigate(-1)}>← Back</button>
            <h1>{movie.title}</h1>
            <p>{movie.year} • {movie.genre} •  {movie.rating} ⭐</p>
            <p>{movie.description}</p>
            <button onClick={toggleFavorite}>
                {isFavorite ? "Remove from Favourites" : "Add to Favourites"}
            </button>
        </div>
    )
}