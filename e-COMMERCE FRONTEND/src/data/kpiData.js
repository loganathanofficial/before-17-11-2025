export const kpiData = [
  {
    id: 1,
    title: "Total Revenue",
    value: 45200,
    unit: '$',
    change: 5.2,
    changeType: 'positive',
    // New Icon: Cash Stack / Banknote
    icon: () => '💵', 
  },
  {
    id: 2,
    title: "New Orders",
    value: 890,
    unit: '',
    change: 2.1,
    changeType: 'positive',
    // New Icon: Shopping Basket / Receipt
    icon: () => '🧾', 
  },
  {
    id: 3,
    title: "Average Order Value",
    value: 50.79,
    unit: '$',
    change: 1.5,
    changeType: 'negative',
    // New Icon: Scale (for average/balance)
    icon: () => '⚖️', 
  },
  {
    id: 4,
    title: "Conversion Rate",
    value: 2.5,
    unit: '%',
    change: 0.3,
    changeType: 'positive',
    // New Icon: Rocket (for performance/launch)
    icon: () => '🛍️',
  },
];