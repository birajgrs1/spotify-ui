
const Preview = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white flex justify-between items-center p-4 mx-[5px] my-[8px] rounded-xl">
      <div>
        <h2 className="font-semibold">Preview of Spotify</h2>
        <p className="text-sm">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
      </div>
      <button className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition hover:scale-105">
        Sign up for free
      </button>
    </div>
  );
};

export default Preview;
