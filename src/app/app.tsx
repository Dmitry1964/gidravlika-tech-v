import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import { Layout } from 'src/pages/layout';

const App = (): React.ReactNode => {

  const router = createBrowserRouter([
    {
      path: AppRoutes.Main,
      element: <Layout />

    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App;


