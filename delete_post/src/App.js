import React, { createContext, useState } from 'react';
import './App.css';
import Post from './components/Post';
import Header from './components/Header';
import { POST_LIST } from './common/constant';
import NoData from './components/shared/NoData';
import BaseProvider from './components/context/BaseProvider';
import Footer from './components/Footer';
import PostDataList from './components/PostDataList';
import { Link, Outlet, createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddPost from './components/AddPost';



function App() {



  return (

    <BaseProvider>
        <Outlet />
    </BaseProvider>

  );

}

export default App;
