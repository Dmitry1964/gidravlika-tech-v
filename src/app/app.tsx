import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import { Layout } from 'src/pages/layout';
import { Suspense } from 'react';
import MainPageLazy from 'src/pages/main-page/ui/main-page-lazy';
import RepairPageLazy from 'src/pages/repair-page/ui/repair-page-lazy';

const App = (): React.ReactNode => {
  const router = createBrowserRouter([
    {
      path: AppRoutes.Main,
      element: <Layout />,
      children: [
        {
          path: AppRoutes.Main,
          element: <MainPageLazy />,
        },
        {
          path: AppRoutes.EquipmentRepair,
          element: <RepairPageLazy />,
        },
      ],
    },
  ]);
  return (
    <Suspense fallback={<div>Loading</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
