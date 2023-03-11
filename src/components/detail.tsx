import React, { useEffect, useState } from "react";
import Aside from "./aside";
import Header from "./header";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import axios from "axios";

function Detail() {
  const url = window.location.href.split(":");

  const [user, setUser] = useState();
  useEffect(() => {
    let id = "";
    url.forEach((str, i) => {
      if (i === url.length - 1) id = str;
    });
    console.log(id);
    const getUser = async () => {
      const userData = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:${id}`
      );
      console.log(userData);
    };
    getUser();
  });
  return (
    <div className="container">
      <Header />
      <div className="aside__and__main">
        <Aside />
        <div className="user__details">
          <div className="actions__box">
            <div className="first">
              <Link to="/dashboard" className="back__to__users">
                <FaArrowCircleLeft />
                back to users
              </Link>
              <h3>User Details</h3>
            </div>
            <div className="second">
              <a href="#" className="blacklist">
                BlackList
              </a>
              <a href="#" className="activate">
                Activate User
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
