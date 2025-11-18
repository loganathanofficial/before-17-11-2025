import React, { useState } from 'react';
import OrdersTable from '../components/dashboard/OrdersTable';
import Button from '../components/ui/Button';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold text-gray-800">Order Management</h1>

      <div className="flex justify-between items-center bg-white-100 p-4 rounded-xl">        
        {/* Search Input */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search orders by ID or customer..."
            className="w-80 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <OrdersTable searchTerm={searchTerm} filterStatus={filterStatus} />
      </div>
    </div>
  );
};

export default Orders;