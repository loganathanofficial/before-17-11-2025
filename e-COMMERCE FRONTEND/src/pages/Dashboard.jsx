
import React from 'react';
import KPICard from '../components/dashboard/KPICard';
import SalesChart from '../components/dashboard/SalesChart';
import ProductBreakdownChart from '../components/dashboard/ProductBreakdownChart';
import RecentOrdersTable from '../components/dashboard/RecentOrdersTable';
import { kpiData } from '../data/kpiData';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl ml-2 font-bold text-gray-700">Analytics Overview</h2>

      <div className="grid p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi) => (
          <KPICard
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            unit={kpi.unit}
            change={kpi.change}
            changeType={kpi.changeType}
            icon={kpi.icon} 
          />
        ))}
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-96">
          <SalesChart />
        </div>
        <div className="h-96">
          <ProductBreakdownChart />
        </div>
      </div>

     
       <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Orders</h3>
        <RecentOrdersTable /> 
      </div>
    </div>
  );

};

export default Dashboard;