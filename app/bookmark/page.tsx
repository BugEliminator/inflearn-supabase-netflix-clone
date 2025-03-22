// app/bookmark/page.tsx
import { getBookmarkedMovies } from "actions/movieActions";
import MovieCard from "components/movie-card";

export const metadata = {
  title: "BOOKMARK",
  description: "Netflix clone using TMDB API",
};

export default async function BookmarkPage() {
  const movies = await getBookmarkedMovies();

  return (
    <div className="grid gap-1 md:grid-cols-4 grid-cols-3 w-full h-full mt-16">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
