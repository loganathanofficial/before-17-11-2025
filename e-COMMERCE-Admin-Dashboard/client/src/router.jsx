import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import DashboardPage from './pages/Dashboard';
import OrdersPage from './pages/Orders';
import ProductsPage from './pages/Products';
import CustomersPage from './pages/Customers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    errorElement: <h1 className="p-10 text-3xl">404 - Page Not Found!</h1>,
    children: [
      {
        index: true, 
        element: <DashboardPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "customers",
        element: <CustomersPage />,
      },
    ],
  },
]);

export default router;