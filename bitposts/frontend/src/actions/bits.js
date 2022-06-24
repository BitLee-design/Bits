import axios from "axios";

import { GET_BITS, DELETE_BIT, ADD_BIT } from "./types";

export const getBits = () => dispatch =>{
    axios.get('/api/leads')
        .then(res => {
            dispatch({
                type: GET_BITS,
                payload: res.data
            });
        })
        .catch(err => console.log(err)); 
};


export const deleteBits = (id) => dispatch =>{
    axios.get('/api/leads/${id}')
        .then(res => {
            dispatch({
                type: DELETE_BIT,
                payload: id
            });
        })
        .catch(err => console.log(err)); 
};

