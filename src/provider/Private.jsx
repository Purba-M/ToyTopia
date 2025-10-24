import React, { use, useContext } from 'react';
import { Authcontext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const Private = ({children}) => {
const {user,loading}=useContext(Authcontext)
// console.log(user);
// Location dekar jnne

const location=useLocation()
console.log(location)

if(loading){
    return <Loading></Loading>
}

if(user && user?.email)
{return children;}
return <Navigate  state={location} to="/auth/login"></Navigate>
};

export default Private;