import axios from 'axios';
import { BASE_URL } from '../config/BaseURL';

const GET_API_ACOOUNT = BASE_URL+'/api/accounts';

export const GET_ACCOUNT = () => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .get(GET_API_ACOOUNT, {headers: { Authorization: `Bearer ${localStorage.custtoken}` }})
        .then(response => {
            return response.data
        })
        .catch(err => {
            localStorage.removeItem('custtoken');
            return err.response
        })
}
