import React, { useState, useEffect } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [name1, setname2] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("https://gexxuassign-production.up.railway.app/register", user)
        .then((res) => {
          alert(res.data.message);
          history.push("/login");
        });
    } else {
      alert("invlid input");
    }
    setname2(user.name);
  };
  useEffect(() => {
    localStorage.setItem("name", user.name);
  }, [name1]);
  console.log("finalname" + "" + name1);
  return (
    <div className="logDiv1">
      <h1>please tell me about yourself!</h1>

      <div className="emailDiv1">
        <div className="inputdiv1">
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="Your Name"
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="Your Email"
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Your Password"
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="password"
            name="reEnterPassword"
            value={user.reEnterPassword}
            placeholder="Re-enter Password"
            onChange={handleChange}
          />{" "}
          <br />
        </div>
        <button className="bt11" onClick={() => history.push("/login")}>
          Log In
        </button>{" "}
        <button className="bt21" onClick={register}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Register;
