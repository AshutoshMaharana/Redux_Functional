import { FETCH_USER_ERROR,
        FETCH_USER_SUCCESS,
        FETCH_USER_LOADING } from "./fetchType";

export const fetchUserLoading = () => {
    return {
        type: FETCH_USER_LOADING,
        

    }

}
export const fetchUserSuccess = (users) => {
    return {
        type : FETCH_USER_SUCCESS,
        payload:users

    }

}
export const fetchUserError = (error) => {
    return {
        type : FETCH_USER_ERROR,
        payload:error

    }

}
export const fetchUsers = () => {
    return async(dispatch) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        dispatch(fetchUserLoading)
        
        if(!res.ok){
            const errMessage = `An error occurred ${res.status}`
             dispatch(fetchUserError(errMessage))
         }
         const data = await res.json();
         //console.log("ashu" +data1[1].name + " " + data[1].name)
          dispatch(fetchUserSuccess(data))


    }

}