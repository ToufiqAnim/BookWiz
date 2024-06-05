
import { Line } from "react-chartjs-2";

const StaticChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Static Chart",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4 // Adjust line curve tension
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 20 // Adjust y-axis step size
          }
        }
      ]
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg m-2">
      <h2 className="text-lg font-medium mb-4">Static Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

const RevenueChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [4000, 3000, 5000, 2000, 6000, 3500],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.4 // Adjust line curve tension
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 1000 // Adjust y-axis step size
          }
        }
      ]
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg m-2">
      <h2 className="text-lg font-medium mb-4">Revenue Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <StaticChart />
        <RevenueChart />
      </div>
    </div>
  );
};

export default Dashboard;
