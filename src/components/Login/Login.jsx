import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToData } from "../../store/Slices/User";

const Login = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [res, setResponse] = useState("");

  const sendData = async () => {
    try {
      await axios
        .post(
          "http://localhost:5000/login",
          { email, password },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setResponse(res.data);
          localStorage.setItem('user_token',JSON.stringify(res.data.token));
          localStorage.setItem('status',JSON.stringify(res.data.success))
          localStorage.setItem('username',JSON.stringify(res.data.username))
          setError(res.data.message);
          if (res.data.status === 200) {
            disptach(
              addToData({
                username: res.data.username,
                status: res.data.success,
              })
            );
            navigate('/about');
          }
          
        })
        .catch((err) => {
          setError(err.message);
          navigate("/signup");
        });
    } catch (e) {
      setError(e.message);
    }
  };

  if (error) {
    alert(error);
    setError("");
  }

  return (
    <div className="login-container ">
      <div className="login-form-container animate__animated animate__fadeInUp">
        <div className="top-heading-section-container-login">
          <h1 id="heading-login">Login</h1>
        </div>
        <form action="" method="get" className="form-login">
          <label htmlFor="email">Email :- </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password :- </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="button-container">
            <button type="button" onClick={sendData}>
              Submit
            </button>
          </div>
        </form>
        <p className="signup-desc">
          Create new Account ?{" "}
          <Link style={{ color: "white" }} to={"/signup"}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
