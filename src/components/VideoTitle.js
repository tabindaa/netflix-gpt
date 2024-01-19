const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-2 text-sm w-1/4">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="text-black hover:opacity-80 bg-white py-1 md:py-4 px-3 md:px-12 mr-2 text-xl rounded-md">
          ▶ Play
        </button>
        <button className="hidden md:inline-block text-white bg-gray-500 px-12 py-1 text-xl bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
