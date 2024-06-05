/* eslint-disable react/prop-types */
import React from "react";

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className={`bg-${color}-200 rounded-lg p-6 shadow-lg m-2`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className={`text-${color}-500 text-3xl mr-2`}>{icon}</span>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <div className="text-right">
          <h3 className="text-3xl font-semibold">{value}</h3>
        </div>
      </div>
    </div>
  );
};

const DashboardItems = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Visitors"
          value="2356"
          icon="👥"
          color="blue"
        />
        <StatCard
          title="Orders"
          value="189"
          icon="📦"
          color="green"
        />
        <StatCard
          title="Total Items"
          value="543"
          icon="🛍️"
          color="purple"
        />
        <StatCard
          title="Revenue"
          value="$4567"
          icon="💰"
          color="yellow"
        />
      </div>
    </div>
  );
};

export default DashboardItems;
