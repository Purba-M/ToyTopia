// import React, { use, useContext } from 'react';
// import { Authcontext } from './AuthProvider';
// import { Navigate, useLocation } from 'react-router';
// import Loading from '../pages/Loading';

// const Private = ({children}) => {
// const {user,loading}=useContext(Authcontext)
// // console.log(user);
// // Location dekar jnne

// const location=useLocation()
// console.log(location)

// if(loading){
//     return <Loading></Loading>
// }

// if(user && user?.email)
// {return children;}
// return <Navigate  state={location} to="/auth/login"></Navigate>
// };

// export default Private;

import React, { useContext } from 'react';
import { Authcontext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const Private = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && user.email) {
    return children;
  }

  // Pass the current pathname inside `state` for redirect after login
  return <Navigate to="/auth/login" state={{ pathname: location.pathname }} replace />;
};

export default Private;
