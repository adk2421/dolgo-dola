import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { siteMap } from './data/siteMap';
import Home from './pages/Home';

const router = createBrowserRouter([
{
    path: "/",
    element: (
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
    ),
    children: [
      {
        path: "/",
        element: <Home siteMap={siteMap} />,
      },
      ...siteMap,
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;