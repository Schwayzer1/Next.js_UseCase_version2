import DashboardComment from "@/components/DashboardComment";
import DashboardPost from "@/components/DashboardPost";
import DashboardUser from "@/components/DashboardUser";
import React from "react";

const adminDashboard = () => {
  return (
    <div className="height">
      <h1 className="text-center text-5xl">DashBoard</h1>
      <h1 className="text-center text-2xl mt-5">Users</h1>
      <DashboardUser />
      <h1 className="text-center text-2xl mt-5">Comments</h1>
      <DashboardComment />
      <h1 className="text-center text-2xl mt-5">Posts</h1>
      <DashboardPost />
    </div>
  );
};

export default adminDashboard;
