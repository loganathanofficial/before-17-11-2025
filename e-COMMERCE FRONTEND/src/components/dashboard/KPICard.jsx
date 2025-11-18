import React from 'react';

const formatValue = (value, unit) => {
  if (unit === '$') {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(value);
  }
  if (unit === '%') {
    return `${value}%`;
  }
  return value.toLocaleString();
};

const KPICard = ({ title, value, unit, change, changeType, icon: IconComponent }) => {
  // Good: Keep the distinct green/red for change indicators
  const changeColor = changeType === 'positive' ? 'text-green-600' : 'text-red-600';
  const changeIcon = changeType === 'positive' ? '▲' : '▼';

  return (
    // Card Border Change: border-gray-200 -> border-gray-100
    <div className="bg-white p-2 rounded-xl shadow-md transition duration-300 hover:shadow-lg border border-gray-100">
      
      <div className="flex justify-between items-start mb-1">
        <p className="text-sm font-medium text-gray-500 uppercase">{title}</p>
        
        {/* ICON COLOR CHANGE: Replaced blue with Soft Teal hex codes */}
        {IconComponent && (
          <div className="p-3 rounded-full bg-[#e0f2f1] text-[#4dc0b5]">
            <IconComponent className="w-5 h-5" />
          </div>
        )}
      </div>

      {/* VALUE TEXT COLOR CHANGE: text-gray-800 -> text-gray-900 */}
      <div className="text-3xl font-bold text-gray-900 mb-1">
        {formatValue(value, unit)}
      </div>

      <div className="text-sm">
        <span className={`${changeColor} font-semibold mr-1`}>
          {changeIcon} {change}%
        </span>
        <span className="text-gray-500">
          vs. Last Period
        </span>
      </div>
    </div>
  );
};

export default KPICard;