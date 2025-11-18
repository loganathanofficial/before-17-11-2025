import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// NOTE: You need to make sure this path is correct for your file structure
import { productData } from '../../data/productData'; 


// Your product data (for reference, assuming it's imported correctly)
// export const productData = [
//   { name: 'Electronics', value: 4000, fill: '#3b82f6' }, 
//   { name: 'Apparel', value: 3000, fill: '#10b981' }, 
//   { name: 'Home Goods', value: 2000, fill: '#f59e0b' },
//   { name: 'Books', value: 1000, fill: '#ef4444' }, 
// ];


// --- Custom Tooltip Component ---
// Provides a clean, styled popup when hovering over a slice.
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    // Calculate total for percentage display in the tooltip
    const total = productData.reduce((sum, entry) => sum + entry.value, 0);
    const percentage = ((data.value / total) * 100).toFixed(1);

    return (
      <div style={{ 
        backgroundColor: '#fff', 
        padding: '10px', 
        border: `1px solid ${data.fill}`, // Border color matches slice color
        borderRadius: '4px', 
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)' 
      }}>
        <p className="font-semibold text-gray-900">{`${data.name}`}</p>
        <p className="text-sm text-gray-700">{`Sales: $${data.value.toLocaleString()}`}</p>
        <p className="text-sm" style={{ color: data.fill }}>{`Share: ${percentage}%`}</p>
      </div>
    );
  }
  return null;
};


const ProductBreakdownChart = () => {
  return (
    <div className="bg-white p-2 rounded-xl shadow-md h-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Sales by Category</h3>
      
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={productData}
            dataKey="value"
            nameKey="name"
            cx="50%" 
            cy="50%" 
            innerRadius={0}        // Classic Pie Chart
            outerRadius={100}      // Increased size
            paddingAngle={2}       // Small gap between slices
            
            // Fixes the issue of the black square border on click
            tabIndex={-1}
            style={{ outline: 'none' }} 
            
            // External labels with percentage and connecting lines
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={true}
          >
            {productData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.fill} 
                stroke="#ffffff" 
                strokeWidth={1}
                // Fixes the issue of the black square border on slices
                style={{ outline: 'none' }} 
              />
            ))}
          </Pie>

          {/* Use the Custom Tooltip component */}
          <Tooltip content={<CustomTooltip />} />
          
          <Legend 
            layout="horizontal"     // Horizontal layout
            verticalAlign="bottom"  // Position at the bottom
            align="center"          // Centered
            wrapperStyle={{ paddingTop: '15px' }} 
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductBreakdownChart;