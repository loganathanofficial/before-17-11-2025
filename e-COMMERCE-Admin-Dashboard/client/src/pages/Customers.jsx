import React from 'react';
import Table from '../components/ui/Table';
import { customerData } from '../data/customerData';

const Customers = () => {
  const headers = ['Customer ID', 'Name', 'Email', 'Orders', 'Total Spent'];

  const renderRow = (customer) => (
    <>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-800 cursor-pointer transition duration-150 ease-in-out">
        {customer.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {customer.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {customer.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-semibold">
        {customer.orders}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        ${customer.totalSpent.toFixed(2)}
      </td>
    </>
  );

  return (
    <div className="space-y-7 p-8 bg-gray-50 min-h-screen"> 
      <h1 className="text-3xl font-bold text-gray-800">
        Customer Directory 
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <h3 className="text-2xl font-bold mb-6 text-gray-700">
          All Active Customers
        </h3>
        
        <Table headers={headers} data={customerData} renderRow={renderRow} />
      </div>
    </div>
  );
};

export default Customers;