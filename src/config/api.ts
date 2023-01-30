import axios from 'axios';
import { URL_BASE } from '../constants';

export const API_GAS = axios.create({
    baseURL: URL_BASE,
    headers: {
        "Content-Type": "text/plain"
    }
});
