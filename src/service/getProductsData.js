import { GET_PRODUCTS } from "../utils/constants";
import api from './axiosConfig';


export const getProducts = async () => {
    try {
        const {data} = await api.get(GET_PRODUCTS);
        console.log(data)
    }  catch (error) {
        console.error(error);
    }
};
