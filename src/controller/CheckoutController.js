import axios from 'axios';
import { BASE_URL } from '../config/BaseURL';

const GET_API_CHECKOUT = BASE_URL+'/api/checkout';
const GET_API_BANKTRF = BASE_URL+'/api/bank-transfer';

export const GET_CHECKOUT = () => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .get(GET_API_CHECKOUT, {headers: { Authorization: `Bearer ${localStorage.custtoken}` }, withCredentials:true})
        .then(response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

export const POST_CHECKOUT = newOrder => {
    return axios
        // .get(GET_INDEX_PRODUCT,{
        //     headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        // })
        .post(GET_API_BANKTRF,
            {
                billing_address : newOrder.billing_address,
                rate : newOrder.rate,
                shipment_obj_id : newOrder.shipment_obj_id
            },
            {headers: { Authorization: `Bearer ${localStorage.custtoken}` }}
            )
        .then(response => {
            console.log("CHECKOUT SUCCESS")
            return response.data
        })
        .catch(err => {
            console.log("CHECKOUT ERR")
            return err.response
        })
}