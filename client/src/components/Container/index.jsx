import React, { useEffect } from "react";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/features/movies/moviesSlice";

const Container = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.movies;
    });
    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);
    if (data.movies.length === 0) {
        return <h4>There are no movies</h4>
    }
    return (
        <div>
            {
                data.movies.length !== 0 && data.movies.map(
                    (prop, index) => <Card props = {prop} key = {index}/>
                )
            }
        </div>
    )
}

export default Container;