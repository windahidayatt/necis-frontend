import axios from 'axios';
import { BASE_URL } from '../config/BaseURL';

const GET_API_ACOOUNT = BASE_URL+'/api/accounts';
const GET_API_ADDRESS = BASE_URL+'/api/customer/';

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


export const POST_ADDRESS = (id,newAddress) => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .post(GET_API_ADDRESS + id + "/address",
            {
                _token : newAddress._token,
                status : newAddress.status,
                alias : newAddress.alias,
                address_1 : newAddress.address_1,
                address_2 : newAddress.address_2,
                country_id : newAddress.country_id,
                zip : newAddress.zip,
                phone : newAddress.phone
            },
            // {headers: {'X-CSRF-TOKEN': `${newAddress._token}` }},
            // {withCredentials:true}
            {headers: { Authorization: `Bearer ${localStorage.custtoken}` }}
            )
        .then(response => {
            console.log(response)
            // return response.data
        })
        .catch(err => {
            console.log(err)
            return err.response
        })
}

