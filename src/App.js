import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxActions } from './redux';
import { useCallback, useEffect } from 'react';
import { searchMovies } from './redux/actions';

function App() {

  // GET REDUX STORE VALUE
  const { moviesList, selectedMovie } = useSelector(state => state);

  const dispatch = useDispatch();
  const { setMoviesList, resetMoviesList } = bindActionCreators(reduxActions, dispatch);

  const fetchMovies = useCallback(async() => {
    const res = await searchMovies({ query : "batman returns" });
    console.log(res)
  }, [searchMovies]);

  // useEffect(() => {
  //   const movies = fetchMovies();
  // }, [fetchMovies]);

  return (
    <div className="App">
      <h1>Movies List App</h1>
      <button onClick={() => setMoviesList([{title: 'A', year: '2019'}, {title: 'B', year: '2020'}])}>Update Movies List</button>
      <button onClick={() => resetMoviesList()}>Reset Movies List</button>
    </div>
  );
}

export default App;
