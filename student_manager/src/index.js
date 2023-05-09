import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import HomePage from './components/HomePage';
import BaseStudent from './components/BaseStudent';
import Students from './components/Students';

import StudentAdd from './components/StudentAdd';
import Page404 from './components/Page404';
import StudentDetail from './components/StudentDetail';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
        children: [
          {
            path:"student",
            element: <BaseStudent />,
            children: [
              {
                path: "",
                element: <Students />,
              },
              {
                path: ":studentId",
                element: <StudentDetail />
              },
              {
                path: "adds",
                element: <StudentAdd />
              },


            ]
          }
        ]
      },
      {
        path:"/404",
        element: <Page404 />
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
