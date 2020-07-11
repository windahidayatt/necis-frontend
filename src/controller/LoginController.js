import axios from 'axios';
import { BASE_URL } from '../config/BaseURL';
import jwt_decode from 'jwt-decode';

// GATAU APA API NYA
const GET_API_LOGIN = BASE_URL+'/api/login';
const GET_API_LOGOUT = BASE_URL+'/api/logout';

export const LOGIN_CUSTOMER = cust => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .post(GET_API_LOGIN,
            {
                email : cust.email,
                password : cust.password
            },
            {withCredentials:true}
            )
        .then(response => {
            localStorage.setItem('custtoken', response.data.token);
            return response.data.token;
            
        })
        .catch(err => {
            return err.response
        })
}

export const LOGOUT_CUSTOMER = () => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .get(GET_API_LOGOUT, {headers: { Authorization: `Bearer ${localStorage.custtoken}` }, withCredentials:true})
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

