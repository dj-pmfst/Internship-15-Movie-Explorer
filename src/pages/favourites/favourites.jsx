import styles from './favourites.module.css'
import { useLocalStorage } from "../../hooks/useLocalStorage"
import MovieCard from "../../components/MovieCard/MovieCard"

export default function Favourites() {
    const [favourites, setFavourites] = useLocalStorage("favourites", [])

    const removeFavourite = (id) => {
        setFavourites(favourites.filter(movie => movie.id !== id))
    }

    if (favourites.length === 0) 
        return <p>No favourites added</p>

    return (
        <div>
            {favourites.map(movie => (
                <MovieCard key={movie.id} movie={movie} onRemove={removeFavourite} />
            ))}
        </div>
    )
}