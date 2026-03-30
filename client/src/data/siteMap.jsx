import IOSHomeScreen from '../pages/Sample_4';
import Layout from '../pages/shop/layouts/Layout';
import Login from '../pages/shop/pages/Login';
import Main from '../pages/shop/pages/Main';

export const siteInfo = {
  title: "DOLGO-DOLA",
};

export const siteMap = [
  {
    name: "shop",
    description: "쇼핑몰 사이트",
    path: "/shop",
    element: <Layout siteInfo={siteInfo} />,
    children: [
      { index: true, element: <Main /> },
      { path: "login", element: <Login /> }
    ]
  },
  {
    name: "샘플 4",
    description: "아이폰 홈 스크린",
    path: "/sample4",
    element: <IOSHomeScreen siteInfo={siteInfo} />,
  },
];