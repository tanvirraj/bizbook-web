import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const DashboardScreen = () => {
  const user: any = useSelector((state: RootState) => state.userModel.user);
  console.log("dashboaed");
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{user.userName}</h1>
    </div>
  );
};

export default DashboardScreen;
