import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/features/movies/moviesSlice";

const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {        
        return state.movies;
    });
    useEffect(() => {
        dispatch(fetchMovies());        
    }, [dispatch]);
    if (data.movies) {
        return(
            <div>
                {
                    data.movies.map((movie) => (
                        <div key = {movie.id}>
                            <li>{ movie.name }</li>
                            <h4>{ movie.duration }</h4>
                            <h4>{ movie.rating }</h4>
                        </div>
                    ))
                }
            </div>
        )
    }
    if (data.loading) {
        return(
            <h2>Loading....</h2>
        )
    }
    if (data.error !== null) {
        return(
            <h2>{ data.error }</h2>
        )
    }    
};

export default Home;