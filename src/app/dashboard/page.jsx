import React from "react";
import Card from "../ui/dashboard/card/card";
import Rightbar from "../ui/dashboard/righbar/righbar";
import Chart from "../ui/dashboard/chart/chart";
import Transcation from "../ui/dashboard/transaction/transcation";

const Dashboard = () => {
  return (
    <div className="flex mt-3">
      <div className="flex-col w-[80%] mx-auto space-y-3">
        <div className="flex justify-between gap-8">
          <Card />
          <Card />
          <Card />
        </div>
          <Transcation />
          <Chart />
      </div>
      <div className="w-[20%] ms-3">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
