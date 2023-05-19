import sign from "jwt-encode";
import React, { useEffect } from "react";
import axios from 'axios';
const Signup = () => {
  useEffect(()=> {
    const signupHandler = async () => {
      try {
        const response = await axios.post(`/api/auth/signup`, {
          firstName: "Devangi",
          lastName: "Bhutiya",
          email: "devangibhutiya@gmail.com",
          password: "Devangi@3005",
        });
        // saving the encodedToken in the localStorage
        localStorage.setItem("token", response.data.encodedToken);
      } catch (error) {
        console.log(error);
      }
    };
    signupHandler();
  },[])
return (
  <div>Hello </div>
)
}
export default Signup