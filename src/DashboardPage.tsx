import React from 'react';
import './DashboardPage.css';

const DashboardPage: React.FC = () => {
  const exportReport = async () => {
    try {
      const response = await fetch('https://oilcompany.azurewebsites.net/api/HttpTriggerPDF?code=5bOJ2pW-elC_fciTqWMTvlWBpf549zzME_qzn7kLfVqhAzFu7VdPLw%3D%3D', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'report.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="dashboard-container flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <h1 className="text-5xl font-bold mb-8">PowerBI Financial Dashboard</h1>
      <button onClick={exportReport} className="bg-blue-500 text-white py-2 px-4 rounded">Export as PDF</button>
      <div className="w-11/12 h-4/5 mt-8 border-4 border-yellow-400 rounded-lg overflow-hidden">
        <iframe
          title="try_finance"
          className="w-full h-full"
          src="https://app.powerbi.com/view?r=eyJrIjoiZGVmNzIwNTktY2ZlYy00ZWQwLTg1NTYtYTJlNTU1NzIxNmExIiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}

export default DashboardPage;
