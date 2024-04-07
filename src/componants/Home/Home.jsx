// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const Home = () => {
   const authInfo = useContext(AuthContext);
//    console.log(authInfo);
    return (
        <div>
            <h2>This is home : {authInfo.name} </h2>
        </div>
    );
};

export default Home;