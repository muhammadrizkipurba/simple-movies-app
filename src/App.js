import { Routes, Route } from 'react-router-dom'
import './App.css';
import { HomePage, MovieDetailsPage } from './routes';

function App() {

  return (
    <div className="App">
      <div className='container py-10'>
        <Routes>
          <Route exact path='/:id' element={<MovieDetailsPage />} />
          <Route exact path='/' element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
