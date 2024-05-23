import React from 'react';
import './DashboardPage.css';

const DashboardPage: React.FC = () => {

  return (
    <div className="dashboard-container flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <h1 className="text-5xl font-bold mb-8">PowerBI Financial Dashboard</h1>
      <div className="w-11/12 h-4/5 mt-8 border-4 border-yellow-400 rounded-lg overflow-hidden">
        <iframe
          title="try_finance"
          className="w-full h-full"
          src="https://app.powerbi.com/view?r=eyJrIjoiZTEzNmQ2N2UtNzdmYy00N2M4LTlmNmItNDhhZjk2NjM1ZjNkIiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}

export default DashboardPage;
