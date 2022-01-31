import React from 'react';
import { FETCH_USER_ERROR,
    FETCH_USER_SUCCESS,
    FETCH_USER_LOADING } from "./fetchType";


const initialState = {
    loading:false,
    users:[],
    error:''
}



const fetchReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_USER_LOADING: return {
            ...state,
            loading:true

        }
        case FETCH_USER_SUCCESS: return {
            ...state,
            loading:false,
            users:action.payload,
            error:''
            
        }
        case FETCH_USER_ERROR: return {
            ...state,
            loading:false,
            users:[],
            error:action.payload
            
        }
        default: return state;
    }
   
};

export default fetchReducer;
