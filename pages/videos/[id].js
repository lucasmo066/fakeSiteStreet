import videos from '../../lib/videos.json'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function Video({ video }) {

    return (
        <Layout>
            <div className="text-brand-black">
                <main className="max-w-7xl mx-auto py-4 px-8">
                    <div className="flex flex-col md:flex-row items-center">
                        <div>
                            <h1 className='text-2xl md:text-4xl font-semibold'>{video.title}</h1>
                            <div className='inline-flex items-center gap-8 px-4 py-2'>
                                <p className='text-md md:text-brand-black'>{video.stats_number_of_plays} views</p>
                                <p className='text-md md:text-brand-black'>{video.stats_number_of_likes} likes</p>
                                <p className='text-md md:text-brand-black'>{video.stats_number_of_comments} comments</p>
                            </div>
                        </div>
                        <div className="flex-grow"></div>
                        <Link href={video.url} passHref target="_blank">
                            <div className="mt-8 shadow-md hover:drop-shadow-2xl transition-all md:mt-0 relative w-96 h-56 md:w-128 md:h-72 cursor-pointer">
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                                <img src={video.thumbnail_large} loading="lazy" alt="" className="absolute inset-0 w-full h-full object-cover" />
                                <img src="/assets/playbtn.png" loading="lazy" alt="Play Button" className="absolute inset-0 w-full h-full object-contain" />
                            </div>
                        </Link>
                    </div>
                    <hr className='my-4 text-brand-gray' />
                    <div className='text-md font-medium' dangerouslySetInnerHTML={{__html: video.description}}></div>
                </main>
            </div>
        </Layout>
    )
}


export async function getStaticPaths() {
    const paths = videos.map((video) => ({
        params: { id: video.id.toString() },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const video = videos.find((video) => video.id === parseInt(params.id))
    return { props: { video } }
}
