import { Link } from "react-router-dom";
import pageNotFoundImage from "../assets/images/pagenotfound.png";
import { Button } from "../components";
import { useTitle } from "../hooks";
export const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={pageNotFoundImage}
              alt="404 Page Not Found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
