import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { useRoutes } from 'react-router-dom'
import './App.css';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store';
import HomePage from './routes/Home';
import MovieDetailsPage from './routes/SingleMovie';

function AppRoutes() {

  const routes = useRoutes([
    { path: '/:id', element: <MovieDetailsPage /> },
    { path: '/', element: <HomePage /> }
  ]);

  return routes;
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="App">
            <div className='container py-10'>
              <AppRoutes />
            </div>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App;
