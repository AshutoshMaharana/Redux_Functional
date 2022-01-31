import React,{useEffect}from 'react';
import { useSelector,useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/fetch/fetchAction';


const UserContainer = () => {
    const userData = useSelector(state => state.fetch)
    const fetchDispatch = useDispatch()
    useEffect(() =>{
        fetchDispatch(fetchUsers())
    },[])
   
  return userData.loading? (
      <h2>Loading</h2>
  ): userData.error ? (
      <h2>{userData.error}</h2>
  ):(
      <div>
          <h2>UserList</h2>
          <div>
             { userData &&
              userData.users && 
              userData.users.map(
                  user => <p key = {user.id}>{user.name}</p>
              )}
          </div>
      </div>

  )
};

export default UserContainer;
