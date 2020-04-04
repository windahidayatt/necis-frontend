import axios from 'axios';
import { BASE_URL } from '../config/BaseURL';

const GET_API_INDEX_PRODUCT = BASE_URL+'/posts';
const GET_API_PRODUCT = BASE_URL+'/posts/';

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

export const GET_PRODUCT = (id) => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .get(GET_API_PRODUCT+id)
        .then(response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

