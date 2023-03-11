import React from "react";
import {
  FaBriefcase,
  FaChevronDown,
  FaHome,
  FaUsers,
  FaUserCircle,
  FaMoneyBill,
  FaHandshake,
  FaSave,
  FaHandHoldingUsd,
  FaUserCheck,
  FaUserLock,
  FaDatabase,
} from "react-icons/fa";

export default function Aside() {
  return (
    <div className="aside">
      <div className="org__and__dash">
        <p>
          <FaBriefcase className="icon" />
          <p>Switch Organization</p>
          <FaChevronDown />
        </p>
        <p>
          <FaHome className="icon" />
          Dashboard
        </p>
      </div>
      <p className="nav__header">Custormers</p>
      <div className="custormers">
        <a href="#" className="nav__item active">
          <FaUsers className="icon" />
          Users
        </a>
        <a href="#" className="nav__item">
          <FaUserCircle className="icon" />
          Gurantors
        </a>
        <a href="#" className="nav__item">
          <FaMoneyBill className="icon" />
          Loans
        </a>
        <a href="#" className="nav__item">
          <FaHandshake className="icon" />
          Decision Models
        </a>
        <a href="#" className="nav__item">
          <FaSave className="icon" />
          Savings
        </a>
        <a href="#" className="nav__item">
          <FaHandHoldingUsd className="icon" />
          Loan Requests
        </a>

        <a href="#" className="nav__item">
          <FaUserCheck className="icon" />
          Whitelist
        </a>
        <a href="#" className="nav__item">
          <FaUserLock className="icon" />
          Karma
        </a>
      </div>
      <p className="nav__header">Businesses</p>
      <div className="businesses">
        <a href="#" className="nav__item">
          <FaBriefcase className="icon" />
          Organizations
        </a>
        <a href="#" className="nav__item">
          <FaHandHoldingUsd className="icon" />
          Loane Products
        </a>
        <a href="#" className="nav__item">
          <FaMoneyBill className="icon" />
          Savings Products
        </a>
        <a href="#" className="nav__item">
          <FaDatabase className="icon" />
          Fees And Charges
        </a>
        <a href="#" className="nav__item">
          <FaMoneyBill className="icon" />
          Transactions
        </a>
        <a href="#" className="nav__item">
          <FaMoneyBill className="icon" />
          Services
        </a>
        <a href="#" className="nav__item">
          <FaMoneyBill className="icon" />
          Service Account
        </a>
        <a href="#" className="nav__item">
          <FaMoneyBill className="icon" />
          Settlements
        </a>
        <a href="#" className="nav__item">
          <FaMoneyBill className="icon" />
          Reports
        </a>
      </div>
      <p className="nav__header">Settings</p>
      <div className="settings">
        <a href="#" className="nav__item">
          <FaMoneyBill className="icon" />
          Preferences
        </a>
        <a href="#" className="nav__item">
          <FaMoneyBill className="icon" />
          Fees And Pricing
        </a>
        <a href="#" className="nav__item">
          <FaMoneyBill className="icon" />
          Audit and logs
        </a>
      </div>
    </div>
  );
}
