import axios from 'axios';
import { PRODUCTS_API_URL } from '../utils/constants';

export default axios.create({
    baseURL: PRODUCTS_API_URL,
    headers: {"ngrok-skip-browser-warning": "true"}
}); 