import React from "react";
import "./homepage.css";
import { useState, useContext, useEffect } from "react";
import { Globalinfo } from "../login/login";

const Homepage = ({ setLoginUser }) => {
  const [data, setdata] = useState(true);
  const [setname, setname1] = useState([]);

  // console.log(val);
  function foo() {
    setdata(!data);
  }
  console.log(localStorage.getItem("email"));
  function foo1() {
    setdata(true);
  }

  return (
    <>
      <div className="userDiv">
        <h1 className="heading">user home page</h1>

        <div>
          {data ? (
            <div className="userdata" onClick={foo}>
              {localStorage.getItem("name")[0]}
            </div>
          ) : (
            <div className="userdata1" onClick={foo1}>
              <h1 className="name">{localStorage.getItem("name")}</h1>
              <h1 className="email">Email : {localStorage.getItem("email")}</h1>
              <div className="daydata">
                <span>Account Age</span> <span>1 Day</span>
              </div>
              <h1 className="email">Last Update</h1>
              <div className="daydata1">
                <span>Last Update :</span>{" "}
                <span>{new Date().toLocaleString()}</span>
              </div>
              <div className="buttonlog" onClick={() => setLoginUser({})}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;

//   <div className="homepage">
//             <h1>Hello Homepage</h1>
//             <div className="button" onClick={() => setLoginUser({})} >Logout</div>
//         </div>
