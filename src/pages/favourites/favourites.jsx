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
            <div className={styles.container}>
                <header className={styles.header}>
                    <span>Favourites <img className={styles.star} src="/src/assets/star.png" /></span>
                </header>
                <main className={styles.main}>
                    <div className={styles.favourites}>
                        <div className={styles.grid}>
                            {favourites.map(movie => (
                                <MovieCard key={movie.id} movie={movie} onRemove={removeFavourite} />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        )
}