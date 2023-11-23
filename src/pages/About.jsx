import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const About = () => {
  const [error, setError] = useState("");
  const [res,setRes] = useState("");
  const userName = JSON.parse(localStorage.getItem('username'));

  const navigate = useNavigate();

  const checkAuth = async () => {
    const myToken = JSON.parse(localStorage.getItem("user_token"));
    try {
      await axios
        .post("http://localhost:5000/about",{}, {
          headers: {
            Authorization: `${myToken}`,
          },
          withCredentials: true,
        })
        .then((res) => {
          setRes(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          setError(err.response.data);
          console.log(err.response.data);
          navigate("/login");
        });
    } catch (err) {
      console.log("Internal server error :- ", err.message);
    }
  };

  if (error) {
    alert(error);
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="about-container">
      <div className="about-details-container animate__animated animate__fadeInUp">
        <h1 className='userName'>{userName}</h1>
      </div>
    </div>
  );
};

export default About;
