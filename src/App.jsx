import React from 'react';
    import { Line } from 'react-chartjs-2';
    import { FaDollarSign, FaUsers, FaChartLine } from 'react-icons/fa';

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Revenue',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    const KPI = ({ icon, title, value }) => (
      <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
        <div>
          <span className="text-3xl">{icon}</span>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600">{value}</p>
        </div>
        <div className="w-1/3">
          <Line data={data} options={options} />
        </div>
      </div>
    );

    const App = () => (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Enterprise KPI Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <KPI icon={<FaDollarSign />} title="Revenue" value="$120,000" />
          <KPI icon={<FaUsers />} title="Users" value="1,500" />
          <KPI icon={<FaChartLine />} title="Growth" value="15%" />
        </div>
      </div>
    );

    export default App;
