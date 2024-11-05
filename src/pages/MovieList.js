import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks";
export const MovieList = ({ apiPath, title }) => {
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`;
  const { data: movies } = useFetch(url);
  useTitle(title);
  return (
    <main>
      <div className="flex justify-start flex-wrap">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};
