import { apiRequest } from "../utils/api/api";

export const setVoting = async (movieId, value) =>
    apiRequest({
        path: `/movie/${movieId}/rating`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        bodyRequest: {
            value: value
        }
    });