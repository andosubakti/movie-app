import { apiRequest } from "../utils/api/api";

export const fetchPopularMovieList = async (params) =>
    apiRequest({
        path: `/movie/popular`,
        method: 'GET',
        params
    });