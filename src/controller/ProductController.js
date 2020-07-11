import axios from 'axios';
import { BASE_URL } from '../config/BaseURL';

// const GET_API_INDEX_PRODUCT = BASE_URL+'/posts';
// const GET_API_PRODUCT = BASE_URL+'/posts/';

// nyoba dr aris
const GET_API_INDEX_PRODUCT = BASE_URL+'/api/product';
const GET_API_PRODUCT = BASE_URL+'/api/product/';
const GET_API_SEARCH = BASE_URL+'/api/search';
export const GET_IMAGE_PRODUCT = BASE_URL+'/storage/';


export const GET_LIST_PRODUCT = () => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .get(GET_API_INDEX_PRODUCT)
        .then(response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

export const GET_PRODUCT = (slug) => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .get(GET_API_PRODUCT+slug)
        .then(response => {
            return response.data[0]
        })
        .catch(err => {
            return err.response
        })
}

export const GET_PRODUCT_SEARCH = (q) => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .get(GET_API_SEARCH + "?q=" + q,
            {
                q : q
            }
        )
        .then(response => {
            return response.data.data
        })
        .catch(err => {
            return err.response
        })
}



