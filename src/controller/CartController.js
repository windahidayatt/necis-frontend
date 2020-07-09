import axios from 'axios';
import { BASE_URL } from '../config/BaseURL';

const GET_API_CART= BASE_URL+'/api/cart';
const GET_API_CART_ITEM= BASE_URL+'/api/cart/';


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
            return response.data
            // console.log("Item added", response);
        })
        .catch(err => {
            return err.response
            // console.log("Error add to cart", err);
        })
}

export const GET_LIST_CART = () => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .get(GET_API_CART,{withCredentials:true})
        .then(response => {
            // console.log(response.data)
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

export const UPDATE_CART_ITEM = newItem => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .post(GET_API_CART_ITEM + newItem.rowId,
            {
                rowId : newItem.rowId,
                quantity : newItem.quantity,
                _method : newItem._method
            },
            {withCredentials:true}
            )
        .then(response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

export const DELETE_CART_ITEM = deleteItem => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .post(GET_API_CART_ITEM + deleteItem.rowId,
            {
                rowId : deleteItem.rowId,
                _method : deleteItem._method
            },
            {withCredentials:true}
            )
        .then(response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

