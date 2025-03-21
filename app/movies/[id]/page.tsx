import { getMovie } from "actions/movieActions";
import UI from "./ui";

export default async function MovieDetail({ params }) {
  const movie = await getMovie(params.id);

  return (
    <main className="flex items-center pt-16 bg-blue-gray-100 w-full absolute top-0 bottom-0 left-0 right-0">
      {movie ? <UI movie={movie} /> : <div>영화가 없습니다!</div>}
    </main>
  );
}
