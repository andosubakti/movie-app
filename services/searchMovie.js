import { apiRequest } from "../utils/api/api";

export const fetchSearchMovie = async (params) =>
    apiRequest({
        path: `/search/movie`,
        method: 'GET',
        params
    });