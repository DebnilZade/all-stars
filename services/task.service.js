import { fetchWrapper } from '../helpers';
import getConfig from 'next/config';
const { publicRuntimeConfig,reactStrictMode } = getConfig();


const baseUrl = `${publicRuntimeConfig.apiUrl}/tasks`;

export const taskService = { 
    getAll
};


function getAll() {
    return fetchWrapper.get(baseUrl);
}

