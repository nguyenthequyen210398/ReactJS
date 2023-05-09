import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PostDataList from './components/PostDataList';
import AddPost from './components/AddPost';
import HomePage from './components/HomePage';
import Post from './components/Post';
import PostWithContext from './components/PostWithList';
import PostWithList from './components/PostWithList';
import Page404 from './components/Page404';
import BasePost from './components/BasePost';
import Count from './components/Count';

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
            path: "post",
            element: <BasePost />,
            children: [

              {
                path: "",
                element: <PostDataList />,
              },
              {
                path: ":postId",
                element: <PostWithList />,
              },
              {
                path: "adds",
                element: <AddPost />,
              },

            ]
          },
          {
            path: "count",
            element: <Count />
          }


        ]
      },

      {
        path: "/404",
        element: <Page404></Page404>
      },
      // {
      //   path: "/posts/:id",
      //   element: <Post />,
      // },


    ]

  },

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
