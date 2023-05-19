import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading} =  useContext(AuthContext)
    const location =  useLocation()
    // console.log(location);
    
    if(loading){
        return <></>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from : location}} ></Navigate>
    

};

export default PrivateRoute;