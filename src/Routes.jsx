import App from './App';
import Homepage from './modules/Homepage';
import About from './modules/About';
import Blog from './modules/Blog';
import ErrorPage from './modules/ErrorPage';


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      }
    ]
  }
];

export default routes;