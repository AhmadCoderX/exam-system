import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = ({ routes, renderRoutes }) => {
  return (
    <>
      <div>Dashboard</div>
      <Outlet />
    </>
  );
};

export default Dashboard;
