import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/home/Home";
// import AuthProvider from "./pages/Auth/Auth";

function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      {/* <AuthProvider> */}
        <Routes> 
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;

// {/* <div className="App">
//       <div className="blur" style={{top:'-18%', right:'0'}}></div>
//       <div className="blur" style={{top:'36%', left:'-8rem'}}></div>
//       {/* <Home/> */}
//       <Profile/>
//       {/* <Auth/> */}
//     </div> */}
