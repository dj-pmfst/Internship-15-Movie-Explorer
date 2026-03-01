import styles from './favourites.module.css'
import { useLocalStorage } from "../hooks/useLocalStorage"
import MovieCard from "../components/MovieCard"

export default function Favourites() {
    const [favorites, setFavorites] = useLocalStorage("favorites", [])

    const removeFavorite = (id) => {
        setFavorites(favorites.filter(movie => movie.id !== id))
    }

    if (favorites.length === 0) 
        return <p>No favourites added</p>

    return (
        <div>
            {favorites.map(movie => (
                <MovieCard key={movie.id} movie={movie} onRemove={removeFavorite} />
            ))}
        </div>
    )
}