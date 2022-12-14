import Hero from '../components/Hero'
import RichText from '../components/richtext'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import VidPreview from '../components/VidPreview'
import videos from '../lib/videos.json'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Hero videos={videos}/>
        <main className="max-w-7xl mx-auto flex flex-col items-center ">
        {videos.map((video) => (
          <VidPreview video={video} />
          ))}
        <RichText title="Ready to have your cake and eat it too?" content="Start by designing the experience you have in mind. We'll guide you through each step. If your experience meets the quality standards, you'll hear more about what's next." />
        </main>
        <br />
        <br />
      </div>
    </Layout>
  )
}
