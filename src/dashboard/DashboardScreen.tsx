import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const DashboardScreen = () => {
  const user = useSelector((state: RootState) => state.userModel.user);

  console.log("Dashboard", user);

  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{user}</h1>
    </div>
  );
};

export default DashboardScreen;
