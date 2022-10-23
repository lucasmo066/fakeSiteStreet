import styles from '../styles/styles.module.css'

export default function RichText(props) {
    return(
        <section className={styles.RichText}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </section>
    )
}