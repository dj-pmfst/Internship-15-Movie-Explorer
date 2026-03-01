import styles from './error.module.css'

export default function NotFound(){
    return(
        <div className={styles.container}>
            <h1>404</h1>
            <p>Not Found</p>
        </div>
    )
}