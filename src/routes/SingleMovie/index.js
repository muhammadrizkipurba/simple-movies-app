import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import DetailsList from '../../components/detailsList';
import LoadingSpinner from '../../components/loadingSpinner';
import Notification from '../../components/notification';
import RatingBox from '../../components/ratingBox';
import funct from '../../helper';

const MovieDetailsPage = () => {
  const { id } = useParams();

  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const fetchData = useCallback(async(id) => {
    setLoading(true);
    setErrorMsg(null);

    const res = await funct.onFetchSingleMovie({ id });
    if(res.Response.toLowerCase() === 'true') {
      setLoading(false);
      setData(res)
    } else {
      setLoading(false);
      setErrorMsg(res.Error);
    };
  }, []);

  useEffect(() => {
    if(id) {
      fetchData(id)  
    };
  }, [id, fetchData]);

  return (
    <div className='h-max'>
      <Link to='/' className='bg-green-600 text-white rounded-xl px-4 py-2 flex items-center w-max mb-12'>
        <img alt='' src='/assets/icons/angle-left.svg' className='h-5 pr-2' />
        Back
      </Link>

      {errorMsg && 
        <Notification errorMsg={errorMsg} />
      }
      
      {loading && (
        <div className="text-center flex items-center justify-center" style={{minHeight: 300}}>
          <LoadingSpinner wrapperClassName="flex items-center justify-center"/>
        </div>
      )}

      {!funct.isEmpty(data) &&
        <div className="flex flex-col items-center md:items-start md:flex-row sm:flex-col">
          <img src={data.Poster} alt='poster' style={{height: 500}} className='rounded-xl' />
          <div className='md:ml-10 mt-12 md:mt-0'>
            <h1 className='text-5xl text-center md:text-left mt-5 md:mt-0 font-bold mr-3'>{data.Title} ({data.Year})</h1>
            <div className="mt-10 flex items-center mb-6">
              <label
                className="text-gray-400 text-md italic mr-3"
                style={{ minWidth: 80 }}
              >
                Rating
              </label>
              <RatingBox label={data.imdbRating} />
            </div>
            <DetailsList label="Released" description={data.Released} />
            <DetailsList label="Genre" description={data.Genre} />
            <DetailsList label="Plot" description={data.Plot} />
            <DetailsList label="Cast" description={data.Actors} />
            <DetailsList label="Director" description={data.Director} />
            <DetailsList label="Country" description={data.Country} />
            <DetailsList label="Language" description={data.Language} />
            <DetailsList label="Awards" description={data.Awards} />
            <DetailsList label="Revenue" description={data.BoxOffice} />
          </div>
        </div>
      }
    </div>
  )
}

export default MovieDetailsPage