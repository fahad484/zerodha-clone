import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";


import {useEffect ,useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
import {ToastContainer ,toast} from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
    //   const [cookies , removeCookie] = useCookies(["token"]);
      
      const toastShown = useRef(false);
      const [username ,setUsername] = useState("");
  
      useEffect(()=>{
          const verifyCookie = async() =>{
            
            // console.log("Token from React:", cookies.token);
            //   if(!cookies.token){
            //       navigate("/login");
            //       return;
            //     }
              const {data} = await axios.post(
                  `${process.env.REACT_APP_BACKEND_API_URL}/`,
                  {},
                  { withCredentials:true},
              );
               console.log("Backend verification:", data);
              const {status,user} = data;

              setUsername(user);

            

                return status
                  ? (setUsername(user),
                    !toastShown.current
                      ? (toast(`Hello ${user}`, {
                          position: "top-right",
                        }),
                        (toastShown.current = true))
                      : null)
                  : navigate("/login");
        }
          verifyCookie();
      },[navigate]);
    //   cookies.token,removeCookie
  
      
  return (
    <>
    
        {username ? (
            <>
                <TopBar />
                <ToastContainer />
                <Dashboard username={username}/>

             
            </>
        ) : null}
        
    </>
  );
};

export default Home;
