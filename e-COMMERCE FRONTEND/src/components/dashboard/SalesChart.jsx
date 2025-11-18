import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { salesData } from '../../data/salesData'; 

const SalesChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Monthly Revenue Trend</h3>
      
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart 
          data={salesData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          {/* Grid lines */}
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          
          {/* X-Axis (Months) */}
          <XAxis dataKey="name" stroke="#6b7280" />
          
          {/* Y-Axis (Sales/Revenue) */}
          <YAxis stroke="#6b7280" domain={['auto', 'auto']} />
          
          {/* Tooltip on hover */}
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
            formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
          />
          
          {/* The main sales area */}
          <Area 
            type="monotone" 
            dataKey="Revenue" 
            stroke="#3b82f6" 
            fillOpacity={1} 
            fill="url(#colorRevenue)" 
          />
          
          {/* Gradient definition (for the fill effect) */}
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;