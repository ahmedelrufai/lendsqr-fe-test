import {
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

const Sumery = () => {
  return (
    <div className="sumery__container">
      <div className="sumery">
        <FaUsers className="icon" color="#DF18FF" />
        <p className="sumery__text">Users</p>
        <p className="numbers">27300</p>
      </div>
      <div className="sumery">
        <FaUserCircle className="icon" color="#5718FF" />
        <p className="sumery__text">Active Users</p>
        <p className="numbers">27300</p>
      </div>
      <div className="sumery">
        <FaSave className="icon" color="#F55F44" />
        <p className="sumery__text">Users With Lone</p>
        <p className="numbers">27300</p>
      </div>
      <div className="sumery">
        <FaDatabase className="icon" color="#FF3366" />
        <p className="sumery__text">Users With Savings</p>
        <p className="numbers">27300</p>
      </div>
    </div>
  );
};

export default Sumery;
