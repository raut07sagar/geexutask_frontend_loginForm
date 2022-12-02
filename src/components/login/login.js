import React, { useEffect, useState, createContext } from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export let Globalinfo = createContext();

const Login = ({ setLoginUser }) => {
  const [data, setdata] = useState([]);
  const [name, setname] = useState([]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("https://gexxuassign-production.up.railway.app/login", user)
      .then((res) => {
        alert(res.data.message);
        setLoginUser(res.data.user);
        history.push("/");
      });

    setdata(user.email);
    setname(user.name);
  };
  useEffect(() => {
    localStorage.setItem("email", user.email);
  }, [data]);

  console.log(user);
  return (
    <Globalinfo.Provider value={{ val: user.email }}>
      <div className="logDiv">
        <h1>Welcome!</h1>
        <h1>please log in to continue</h1>

        <div className="emailDiv">
          <div className="inputdiv">
            <input
              placeholder="Email"
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
            />{" "}
            <br />
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />{" "}
            <br />
          </div>
          <button className="bt1" onClick={login}>
            Log In
          </button>{" "}
          <button className="bt2" onClick={() => history.push("/register")}>
            Sign Up
          </button>
        </div>
      </div>
    </Globalinfo.Provider>
  );
};

export default Login;
