import React, { useEffect, useState } from "react";
import Aside from "./aside";
import Header from "./header";
import { Link } from "react-router-dom";
import {
  FaLongArrowAltLeft,
  FaUser,
  FaStar,
  FaStarHalf,
  FaStarHalfAlt,
} from "react-icons/fa";
import axios from "axios";

interface User {
  userName: string;
  phoneNumber: string;
  accountBalance: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avater: string;
    bvn: string;
    address: string;
    currency: string;
    gender: string;
  };
  education: {
    level: string;
    duration: string;
    employmentStatus: string;
    loanRepayment: string;
    officeEmail: string;
    sector: string;
    monthlyIncome: [string, string];
  };
  guarantor: {
    address: string;
    firstName: string;
    phoneNumber: string;
    lastName: string;
    genda: string;
  };
  orgName: string;
  socials: { twitter: string; facebook: string; instagram: string };
  email: string;
  // Add any other properties that the user object has
}

function Detail() {
  const url = window.location.href.split(":");

  const [user, setUser] = useState<User>();
  useEffect(() => {
    let id = "";
    url.forEach((str, i) => {
      if (i === url.length - 1) id = str;
    });

    const getUser = async () => {
      const userData = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      );
      setUser(userData.data);
      console.log(userData);
    };
    getUser();
  }, []);
  return (
    <div className="container">
      <Header />
      <div className="aside__and__main">
        <Aside />
        <div className="user__details">
          <div className="actions__box">
            <div className="first">
              <Link to="/dashboard" className="back__to__users">
                <FaLongArrowAltLeft />
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
          {user && (
            <>
              <div className="user__summery">
                <div className="summery">
                  <div className="user">
                    <FaUser className="icon" />

                    <div className="user__name">
                      <h3 className="name">{user.userName}</h3>
                      <p>{user.phoneNumber}</p>
                    </div>
                  </div>
                  <div className="rattings">
                    <h4>User's Tier</h4>
                    <div className="stars">
                      <FaStar className="icon firs" />
                      <FaStarHalfAlt className="icon" />
                      <FaStarHalfAlt className="icon" />
                    </div>
                  </div>
                  <div className="bank__infor">
                    <h3>{user.accountBalance}</h3>
                    <p>{user.orgName}</p>
                  </div>
                </div>

                <ul className="navigations">
                  <li className="nav__item">
                    <a href="#" className="active">
                      General Details
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#">Documents</a>
                  </li>
                  <li className="nav__item">
                    <a href="#">Bank Details</a>
                  </li>
                  <li className="nav__item">
                    <a href="#">Loans</a>
                  </li>
                  <li className="nav__item">
                    <a href="#">Savings</a>
                  </li>
                  <li className="nav__item">
                    <a href="#">App And System</a>
                  </li>
                </ul>
              </div>
              <div className="detailed__information__box">
                <h4 className="detail-header">Personal Information</h4>
                <div className="sub__detail">
                  <div className="infor-container">
                    <span className="label">Full Name</span>
                    <p className="infor">
                      {user.profile.firstName + " " + user.profile.lastName}
                    </p>
                  </div>
                  <div className="infor-container">
                    <span className="label">Phone Number</span>
                    <p className="infor">{user.phoneNumber}</p>
                  </div>
                  <div className="infor-container">
                    <span className="label">Email Address</span>
                    <p className="infor">{user.email}</p>
                  </div>
                  <div className="infor-container">
                    <span className="label">BVN</span>
                    <p className="infor">{user.profile.bvn}</p>
                  </div>

                  <div className="infor-container">
                    <span className="label">Gender</span>
                    <p className="infor">{user.profile.gender}</p>
                  </div>
                </div>
                <h4 className="detail-header">Educational Background</h4>
                <div className="sub__detail">
                  <div className="infor-container">
                    <span className="label">Level Of Education</span>
                    <p className="infor">{user.education.level}</p>
                  </div>
                  <div className="infor-container">
                    <span className="label">Employment Status</span>
                    <p className="infor">{user.education.employmentStatus}</p>
                  </div>
                  <div className="infor-container">
                    <span className="label">Sector Of Employment</span>
                    <p className="infor">{user.education.sector}</p>
                  </div>
                  <div className="infor-container">
                    <span className="label">Duration Of Employment</span>
                    <p className="infor">{user.education.duration}</p>
                  </div>

                  <div className="infor-container">
                    <span className="label">Office Email</span>
                    <p className="infor">{user.education.officeEmail}</p>
                  </div>
                  <div className="infor-container">
                    <span className="label">Monthly Income</span>
                    <p className="infor">
                      {user.education.monthlyIncome[0] +
                        " - " +
                        user.education.monthlyIncome[1]}
                    </p>
                  </div>
                  <div className="infor-container">
                    <span className="label">Loan Repayment</span>
                    <p className="infor">{user.education.loanRepayment}</p>
                  </div>
                </div>

                <h4 className="detail-header">Socials</h4>
                <div className="sub__detail">
                  <div className="infor-container">
                    <span className="label">Twitter</span>
                    <p className="infor">{user.socials.twitter}</p>
                  </div>
                  <div className="infor-container">
                    <span className="label">Facebook</span>
                    <p className="infor">{user.socials.facebook}</p>
                  </div>
                  <div className="infor-container">
                    <span className="label">Instagram</span>
                    <p className="infor">{user.socials.instagram}</p>
                  </div>
                </div>

                <h4 className="detail-header">Guarantor</h4>
                <div className="sub__detail">
                  <div className="infor-container">
                    <span className="label">First Name</span>
                    <p className="infor">{user.guarantor.firstName}</p>
                  </div>
                  <div className="infor-container">
                    <span className="label">Last Name</span>
                    <p className="infor">{user.guarantor.lastName}</p>
                  </div>
                  <div className="infor-container">
                    <span className="label">Address</span>
                    <p className="infor">{user.guarantor.address}</p>
                  </div>
                  <div className="infor-container">
                    <span className="label">Phone Number</span>
                    <p className="infor">{user.guarantor.phoneNumber}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
