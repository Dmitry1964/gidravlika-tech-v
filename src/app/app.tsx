import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import { Layout } from 'src/pages/layout';
import { Suspense } from 'react';
import MainPageLazy from 'src/pages/main-page/ui/main-page-lazy';
import RepairPageLazy from 'src/pages/repair-page/ui/repair-page-lazy';
import { ScrollTop } from 'src/shared/scroll-top';
import { Loading } from 'src/shared/loading';

const App = (): React.ReactNode => {
  const router = createBrowserRouter([
    {
      path: AppRoutes.Main,
      element: (
        <>
          <Layout />
          <ScrollTop />
        </>
      ),
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
    <Suspense fallback={<Loading/>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
