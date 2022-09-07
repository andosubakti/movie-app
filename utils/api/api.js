import axios from "axios";

export const apiRequest = async ({ url, method, timeout, headers, bodyRequest, params, path }) => {
    const baseUrl = url ? `${url}` : `https://api.themoviedb.org/3`;
    const defaultParams = {
        api_key: '96f786f739c28a69bac8053eab9e0ada'
    }
    const mergedParams = { ...defaultParams, ...params }

    const config = {
        method,
        url: baseUrl + path,
        params: mergedParams
    };

    if (headers) {
        config.headers = { ...config.headers, ...headers };
    }

    if (bodyRequest) {
        config.data = bodyRequest;
    }

    if (timeout) {
        config.timeout = timeout;
    }

    return axios(config)
        .then((res) => res)
        .catch((err) => {
            console.info('[ERROR] Api Request: ', err);
            throw err;
        });
};