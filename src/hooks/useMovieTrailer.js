import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    // either use state and component manage own state or redux to store the trailer id
    // const [trailerId, setTrailerId] = useState(null);
   
    const dispatch = useDispatch();
   
    const getMovieVideos = async () => {
        const data = await fetch (`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const videos = await data.json();
        const filterTrailers = videos.results?.filter((video) => video.type === "Trailer");
        const trailer = filterTrailers.length ? filterTrailers[0]: videos.results[0];
        dispatch(addTrailerVideo(trailer));
        // setTrailerId(trailer.key);
    }

    useEffect(() => {
        getMovieVideos();
    }, [])
}

export default useMovieTrailer;