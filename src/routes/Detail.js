import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Movie from '../components/Movie';
function Detail() {
    const [movie,setMovie] = useState([]) ;
    const [loading,setLoading] = useState(true) ;

    const  {id}  = useParams(); //내용물만 담을 때
    const id2 = useParams(); //object 그 자체로 들고올 때 
    console.log(id2) ;

    const getMovie = async () => {
    const response = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(response.data.movie) ;
    setLoading(false) ;
  };
    useEffect(() => {
    getMovie();
  }, []);

    return (
        <div>{loading? <h1>Loading...</h1>:
            <div>
                <Movie 
                    coverImg={movie.medium_cover_image} 
                    title={movie.title} 
                    summary={movie.description_full}
                    genres={movie.genres}
                    key={movie.id}
                    id={movie.id}                
                ></Movie>
            </div>}
        </div>
    ) ;
}
export default Detail;