import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Sample_1 from './pages/Sample_1';
import Sample_2 from './pages/Sample_2';
import Sample_3 from './pages/Sample_3';
import IOSHomeScreen from './pages/Sample_4';

const siteInfo = {
  title: "DOLGO-DOLA",
};

const siteMap = [
  {
    name: "샘플 1",
    description: "쇼핑몰 사이트",
    path: "/sample1",
    element: <Sample_1 siteInfo={siteInfo} />,
  },
  {
    name: "샘플 2",
    description: "쇼핑몰 사이트",
    path: "/sample2",
    element: <Sample_2 siteInfo={siteInfo} />,
  },
  {
    name: "샘플 3",
    description: "쇼핑몰 사이트",
    path: "/sample3",
    element: <Sample_3 siteInfo={siteInfo} />,
  },
  {
    name: "샘플 4",
    description: "아이폰 홈 스크린",
    path: "/sample4",
    element: <IOSHomeScreen siteInfo={siteInfo} />,
  },
];

const router = createBrowserRouter([
  {
    name: "홈",
    path: "/",
    element: <Home siteMap={siteMap} />,
  },
  ...siteMap,
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;