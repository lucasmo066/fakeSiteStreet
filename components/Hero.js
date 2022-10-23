import styles from "../styles/styles.module.css";
import { useEffect } from "react";

export default function Hero({ videos }) {

    useEffect(() => {
        const randomVideo = videos[Math.floor(Math.random() * videos.length)];
        const randomVideoUrl = `/videos/${randomVideo.id}`;
        const randomButton = document.querySelector("#random-button");
        randomButton.addEventListener("click", () => {
            window.location.href = randomVideoUrl;
        });
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>The world's greatest fake site</h1>
                <p>Create the world's greatest fake site and enjoy
                <br />
                the breeze of fresh air when you complete it.</p>
                <button id="random-button" className="btn shadow-md hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 animate-bounce">Random Video</button>
            </div>
        </section>
    )

}

