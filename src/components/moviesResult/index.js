import React, { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

const MoviesResult = ({ movies, loading, hasMore, onChangePageNumber }) => {  
  const [isOpenLightBox, setIsOpenLightBox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Infinite Loop
  const observerRef = useRef();
  const lastMovieElement = useCallback(node => {
    if(loading) return null;
    if(observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore) {
        onChangePageNumber();
      }
    });

    if(node) observerRef.current.observe(node);
  }, [onChangePageNumber, loading, hasMore]);

  const lightBoxHandler = (imgSrc) => {
    setIsOpenLightBox(true);
    setSelectedImage(imgSrc);
  };

  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
      {movies.map((movie, idx) => (
        <div ref={movies.length === idx+1 ? lastMovieElement : null} key={movie.imdbID+idx} className='bg-white rounded-lg movie-card'>
          <img src={movie.Poster} alt={movie.title} className='w-full' style={{height: 380, objectFit: 'cover'}} onClick={() => lightBoxHandler(movie.Poster)}/>
          <div className='card-overlay'>
            <h1 className='text-center text-white mb-3'>{movie.Title}</h1>
            <Link to={`/${movie.imdbID}`} className='text-white'>
              <div className='text-center text-sm bg-green-600 rounded-lg py-2'>
                See Details
              </div>
            </Link>
          </div>
        </div>
      ))}
      {isOpenLightBox && selectedImage &&
        <Lightbox 
          mainSrc={selectedImage}
          onCloseRequest={() => {
            setIsOpenLightBox(false);
            setSelectedImage(null);
          }}
        />
      }
    </div>
  )
}

export default MoviesResult
