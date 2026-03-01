import { useNavigate } from "react-router-dom"
import styles from './MovieCard.module.css'

export default function MovieCard({ movie, isFavorite, onRemove }) {
    const navigate = useNavigate()

    return (
        <div 
            className={`${styles.card} ${isFavorite ? styles.favorite : ""}`}
            onClick={() => navigate(`/movies/${movie.id}`)}
        >
            <img src={movie.poster} alt={movie.title} className={styles.poster} />
            <div className={styles.info}>
                <h3>{movie.title}</h3>
                <p>{movie.year} • ⭐ {movie.rating}</p>
                {onRemove && (
                    <button onClick={(e) => {
                        e.stopPropagation() 
                        onRemove(movie.id)
                    }}>
                        Remove
                    </button>
                )}
            </div>
        </div>
    )
}