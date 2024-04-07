/* eslint-disable react/prop-types */
import  { useContext } from 'react';
import { AuthContext } from './componants/Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetsRoute = ({children}) => {
    const{user}=useContext(AuthContext);
    if (user){
        return children;
    }
    return <Navigate to="/login"></Navigate>;

};

export default PrivetsRoute;