import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addUpComingMovies(movies.results));
    }

    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;