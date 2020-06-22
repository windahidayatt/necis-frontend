import axios from 'axios';
import { BASE_URL } from '../config/BaseURL';

// const GET_API_INDEX_EVENT = BASE_URL+'/posts';
// const GET_API_EVENT = BASE_URL+'/posts/';

// nyoba dr aris
const GET_API_INDEX_EVENT = BASE_URL+'/api/event';
const GET_API_EVENT = BASE_URL+'/api/event/';
export const GET_IMAGE_EVENT = BASE_URL+'/storage/';


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

export const GET_EVENT = (slug) => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .get(GET_API_EVENT+slug)
        .then(response => {
            return response.data[0]
        })
        .catch(err => {
            return err.response
        })
}

