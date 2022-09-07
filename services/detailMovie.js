import { apiRequest } from "../utils/api/api";

export const fetchDetailMovie = async (movieId) =>
    apiRequest({
        path: `/movie/${movieId}`,
        method: 'GET',
    });