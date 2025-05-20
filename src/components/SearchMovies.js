import MovieCard from "./MovieCard";

const SearchMovies = ({ movies }) => {
  return (
    <div className="bg-black w-full h-screen flex justify-center opacity-90  items-center">
      {movies.length === 0 ? (
        <p className="text-white text-lg">Loading Movies</p>
      ) : (
        <div className="flex gap-4 flex-wrap w-2/3  shrink-0 px-8 py-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movieDetails={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchMovies;
