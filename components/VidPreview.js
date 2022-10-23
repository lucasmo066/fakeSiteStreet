import Link from "next/link";

export default function VidPreview({ video }) {
    return (
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center my-4 md:justify-between">
                <Link href={`/videos/${video.id}`}>
                    <div className="text-brand-black md:w-2/3 cursor-pointer px-4 mb-6 md:mb-0 md:pr-12">
                        <h1 className="text-2xl">{video.title}</h1>
                        <p dangerouslySetInnerHTML={{__html: video.description.substring(0, 100) + "..."}}></p>
                    </div>
                </Link>
                <div className="relative md:w-1/3 h-56 cursor-pointer">
                    <Link href={video.url} passHref>
                        <div className="relative hover:drop-shadow-2xl transition-all w-96 h-56 md:w-50 md:h-50 cursor-pointer bg-transparent">
                            <div className="absolute inset-0 shadow-lg bg-transparent"></div>
                            <img src={video.thumbnail_large} loading="lazy" alt="" className="absolute rounded-lg inset-0 w-full h-full object-cover" />
                            <img src="/assets/playbtn.png" loading="lazy" alt="Play Button" className="absolute inset-0 w-full h-full object-contain" />
                        </div>
                    </Link>
                </div>
            </div>
    );
}


