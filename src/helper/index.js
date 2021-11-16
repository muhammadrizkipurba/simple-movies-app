import { fetchSingleMovie, searchMovies } from "../redux/actions";

const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    value === "-" ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

const onSearchMovies = async ({ query, pageNumber }) => {
  const res = await searchMovies({ query, pageNumber });
  return res;
};

const onFetchSingleMovie = async ({ id }) => {
  const res = await fetchSingleMovie({ id });
  return res;
};

const allHooks = {
  isEmpty: (variable) => isEmpty(variable),
  onSearchMovies: ({ query, pageNumber }) => onSearchMovies({ query, pageNumber }),
  onFetchSingleMovie: ({ id }) => onFetchSingleMovie({ id }),
};

export default allHooks;
