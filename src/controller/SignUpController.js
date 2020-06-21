import axios from 'axios';
import { BASE_URL } from '../config/BaseURL';

// GATAU APA API NYA
const GET_API_REGISTER = BASE_URL+'/api/register';

export const SIGNUP_CUSTOMER = newCust => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .post(GET_API_REGISTER,
            {
                name : newCust.name,
                email : newCust.email,
                status : newCust.status,
                password : newCust.password,
            },
            {withCredentials:true}
            )
        .then(response => {
            // return response.data
            console.log("registration res", response);
        })
        .catch(err => {
            // return err.response
            console.log("registration error", err);
        })
}

