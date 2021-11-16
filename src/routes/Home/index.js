import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxActions } from "../../redux";
import { useState } from "react";
import funct from "../../helper";
import SearchInput from "../../components/searchInput";
import MoviesResult from "../../components/moviesResult";
import LoadingSpinner from "../../components/loadingSpinner";
import Notification from "../../components/notification";

const HomePage = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);

  // GET REDUX STORE VALUE
  const { moviesList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { setMoviesList, resetMoviesList } = bindActionCreators(
    reduxActions,
    dispatch
  );

  const onSearch = async ({ pageNumber }) => {
    setLoading(true);
    setErrorMsg(null);
    const res = await funct.onSearchMovies({ query, pageNumber });

    if (res.Response.toLowerCase() === "true") {
      setLoading(false);
      if (pageNumber) {
        setMoviesList(moviesList.concat(res.Search));
      } else {
        setMoviesList(res.Search);
      }
      setTotalMovies(res.totalResults);
    } else {
      setLoading(false);
      setErrorMsg(res.Error);
    }
  };

  const getSuggestions = useCallback(async(query) => {
    const res = await funct.onSearchMovies({ query, pageNumber: 1});

    if(res.Response.toLowerCase() === 'true') {
      const matchKeywords = res.Search.map(item => item.Title);
      setSuggestions(matchKeywords);
    }
  }, []);

  useEffect(() => {
    if(query.length > 0) {
      getSuggestions(query);
    } else {
      setSuggestions([]);
    };
    // eslint-disable-next-line
  }, [query])

  const onChangeInput = ({ target }) => {
    resetMoviesList();
    setQuery(target.value);
  };

  const onChangePageNumber = () => {
    onSearch({ pageNumber: pageNumber + 1 });
    setPageNumber((prevState) => prevState + 1);
  };

  return (
    <div>
      <div className='flex items-center justify-center lg:items-start lg:justify-between flex-col lg:flex-row'>
        <h1 className="text-5xl font-bold text-center mb-0 mt-5">Movies App</h1>
        <SearchInput
          suggestions={suggestions}
          resetSuggestions={() => setSuggestions([])}
          setSearchQuery={(val) => {
            onChangeInput({target: {value: val}});
            setSuggestions([]);
          }}
          value={query}
          onChange={onChangeInput}
          placeholder="Search movie..."
          inputDisabled={loading}
          buttonDisabled={funct.isEmpty(query)}
          onSubmit={() => {
            onSearch({ reset: true });
          }}
        />
      </div>
      <div className="my-12">
        {errorMsg && <Notification errorMsg={errorMsg} />}
        {moviesList.length === 0 ? (
          <div className="my-10 flex justify-center items-center" style={{minHeight: 200}}>
            <p className="text-center">No movies to show.</p>
          </div>
        ) : (
          <MoviesResult
            movies={moviesList}
            loading={loading}
            hasMore={moviesList.length > 5 && totalMovies > moviesList.length}
            onChangePageNumber={onChangePageNumber}
          />
        )}
      </div>
      {loading && (
        <div className="text-center my-12">
          <LoadingSpinner wrapperClassName="flex items-center justify-center" />
        </div>
      )}
    </div>
  );
};

export default HomePage;
