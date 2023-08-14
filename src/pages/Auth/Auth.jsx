import React, { createContext, useContext, useState } from "react";

import "./Auth.css";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
const AuthContext = createContext(null);
const Auth = ({ children }) => {

  
  const [user, setuser] = useState(null);
  const login = (user) =>{
    setuser(user)
  }
  const logout = (user) =>{
    setuser(null)
  }
  return (
    
    <div className="Auth">
      {/* { const [first, setfirst] = useState(second)} */}
      <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="web-name">
          <h1>Dept of CS</h1>
          <h6>Welcome to the tech HUB</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <LogIn/>
    </div>
  );
};

export const useAuth = () =>{
  return useContext(AuthContext)
}



// function SignUp() {
//   return (
//     <div className="a-right">
//       <form className="info-form auth-form">
//         <h3>SignUp</h3>
//         <div>
//           <input
//             type="text"
//             placeholder="First Name"
//             className="info-input"
//             name="firstName"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="info-input"
//             name="lastName"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             className="info-input"
//             name="username"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Password"
//             className="info-input"
//             name="password"
//           />
//           <input
//             type="text"
//             placeholder="Confirm Password"
//             className="info-input"
//             name="confirmPassword"
//           />
//         </div>
//         <div>
//           <span>Already have an account. Login!</span>
//         </div>
//         <button className="button su-button" type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

function LogIn() {
  return(
    <div className="a-right">
      <form action="" className="info-form auth-form">
        <h3>Log In</h3>
        <div>
          <input
              type="text"
              placeholder="Username"
              className="info-input"
              name="username"
            />
        </div>
        <div>
          <input
              type="text"
              placeholder="Password"
              className="info-input"
              name="password"
            />
        </div>
        <div>
          <span>Don't have an account, Sign Up</span>
        <Link to={'/home'}>
        <button className="button su-button">Login</button>
        </Link>
        </div>
      </form>
    </div>
  )
}

export default Auth;
