import axios from 'axios';
import { BASE_URL } from '../config/BaseURL';

const GET_API_INDEX_EVENT = BASE_URL+'/posts';
const GET_API_EVENT = BASE_URL+'/posts/';

export const GET_LIST_EVENT = () => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .get(GET_API_INDEX_EVENT)
        .then(response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

export const GET_EVENT = (id) => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .get(GET_API_EVENT+id)
        .then(response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

