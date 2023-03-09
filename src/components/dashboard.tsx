import React, { useEffect, useState } from "react";
import axios from "axios";
function Dashboard() {
  const [state, setState] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      let users = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      setState(users.data);
    };
    getUsers();
  }, []);
  const mackup = () => {
    return state?.map((item) => {
      const {
        orgName,
        userName,
        email,
        phoneNumber,
        createdAt,
        lastActiveDate,
        id,
      } = item;
      return (
        <tr key={id}>
          <td>{orgName}</td>
          <td>{userName}</td>
          <td>{email}</td>
          <td>{phoneNumber}</td>
          <td>{createdAt}</td>
          <td>{lastActiveDate}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Organisation</th>
            <th>User Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Date Joined</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{state?.length !== 0 && mackup()}</tbody>
      </table>
    </div>
  );
}

export default Dashboard;
