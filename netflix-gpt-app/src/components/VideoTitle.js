const VideoTitle = ({ overview, title }) => {
    return (
        // <div className="w-screen aspect-video absolute   mx-10 my-10 text-white ">
        //     <div>
        //         <div className="font-bold text-4xl mb-5">{title}</div>
        //         <div className=" mb-5">{overview}</div>
        //         <div className="flex justify-start gap-5 mb-5">
        //             <button className="bg-gray-600 px-6 py-2 text-white rounded-md hover:bg-gray-700">
        //                 Play
        //             </button>
        //             <button className="bg-gray-600 px-6 py-2 text-white rounded-md hover:bg-gray-700">
        //                 More info
        //             </button>
        //         </div>
        //     </div>
        // </div>
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
