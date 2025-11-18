import React from 'react';
import Table from '../ui/Table';
import { orderData } from '../../data/orderData';

const getStatusColor = (status) => {
  switch (status) {
    case 'Delivered':
      return 'bg-green-100 text-green-800';
    case 'Shipped':
      return 'bg-blue-100 text-blue-800';
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'Cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const RecentOrdersTable = () => {
  const headers = ['Order ID', 'Customer', 'Amount', 'Status', 'Date'];

  const renderRow = (order) => (
    <>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">{order.id}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">${order.amount.toFixed(2)}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}
        >
          {order.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
    </>
  );

  return (
    <div className="p-0"> 
      <Table headers={headers} data={orderData} renderRow={renderRow} />
    </div>
  );
};

export default RecentOrdersTable;