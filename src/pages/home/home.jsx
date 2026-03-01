import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import styles from './home.module.css'

export default function home() {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link to="/favourites">Favourites </Link>
            </header>

            <main className={styles.hero}>
                <h1 className={styles.title}>Movie Explorer</h1>
                <p>Discover and save your favourite movies</p>
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className={styles.searchBar}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") navigate(`/movies?search=${e.target.value}`)
                    }}
                />
                {/* <div></div> dodat loop random filomva */}
            </main>
        </div>
    )
}