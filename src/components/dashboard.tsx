import React, { useEffect, useState } from "react";
import CustomPaginationActionsTable from "./usersTable";
import axios from "axios";
import Aside from "./aside";
import Header from "./header";
import Sumery from "./sumery";
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

  return (
    <div className="container">
      <Header />
      <div className="aside__and__main">
        <Aside />
        <div className="main">
          <Sumery />

          {state?.length !== 0 ? (
            <CustomPaginationActionsTable state={state} />
          ) : (
            "loading..."
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
