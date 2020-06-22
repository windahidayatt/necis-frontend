import axios from 'axios';
import { BASE_URL } from '../config/BaseURL';

// GATAU APA API NYA
const GET_API_CART= BASE_URL+'/api/cart';
const GET_API_PRODUCT= BASE_URL+'/api/product';

export const ADD_TO_CART = newItem => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .post(GET_API_CART,
            {
                product : newItem.id,
                quantity : newItem.qty
            },
            {withCredentials:true}
            )
        .then(response => {
            // return response.data
            console.log("Item added", response);
        })
        .catch(err => {
            // return err.response
            console.log("Error add to cart", err);
        })
}

export const GET_LIST_CART = () => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .get(GET_API_PRODUCT)
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

