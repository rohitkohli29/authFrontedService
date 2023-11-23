import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToData } from "../../store/Slices/User";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const sendData = async () => {
    try {
      await axios
        .post("http://localhost:5000/signup", formData, {
          withCredentials : true,
        })
        .then((res) => {
          setResponse(res.data.message);
          alert(res.data.message);
          if(res.data.status == 501){
            navigate('/login');
          }else{
            dispatch(
              addToData({ name: formData.username, status: res.data.success })
            );
            localStorage.setItem('user_token', JSON.stringify(res.data.token));
            localStorage.setItem('status',JSON.stringify(res.data.success))
            localStorage.setItem('username',JSON.stringify(res.data.username))
            navigate("/about");
          }
        })
        .catch((err) => {
          setError(err.message);
        });
    } catch (err) {
      console.log("Failed To save Data !");
    }
  };

  if (error) {
    alert(error);
    setError("");
  }
  return (
    <div className="signup-container">
      <div className="form-container animate__animated animate__fadeInUp">
        <div className="top-heading-section-container">
          <h1 id="heading">SignUp</h1>
        </div>
        <form className="form">
          <label htmlFor="username">Username :- </label>
          <input
            type="username"
            name="username"
            id="username"
            onChange={handleChange}
          />
          <label htmlFor="email">Email :- </label>
          <input type="email" name="email" id="email" onChange={handleChange} />
          <label htmlFor="password">Password :- </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
          <div className="button-container">
            <button type="button" onClick={sendData}>
              Submit
            </button>
          </div>
        </form>

        <p className="desc-login">
          Already have an account ?{" "}
          <Link style={{ color: "white" }} to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
