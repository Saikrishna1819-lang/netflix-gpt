const VideoTitle = ({ overview, title }) => {
    return (
       
        <div className="absolute top-0 left-0 w-full h-full flex items-center bg-gradient-to-r from-black via-transparent to-transparent">
    <div className="px-10 max-w-xl text-white">
        <h1 className="font-bold text-4xl mb-4">{title}</h1>
        <p className="mb-6 text-md">{overview}</p>
        <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 font-semibold">
                ▶ Play
            </button>
            <button className="bg-gray-700 bg-opacity-70 px-6 py-2 rounded-md hover:bg-gray-600 font-semibold">
                ℹ More Info
            </button>
        </div>
    </div>
</div>

    );
};

export default VideoTitle;
