import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Layout from "./Layout";
import Signup from "./components/Signup.jsx/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToData } from "./store/Slices/User";
function App() {
  const disptach = useDispatch();
  const setUser = () => {
    const status =  JSON.parse(localStorage.getItem('status'))
    const username = JSON.parse(localStorage.getItem('status'))

    disptach(addToData({username : username, status : status}))
  }
  useEffect(()=>{
    setUser();
  },[])
  
  return (
    <div className="app-container">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/about' element={<About/>}/>
          <Route path="*" element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
