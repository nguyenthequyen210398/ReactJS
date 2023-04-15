import React, { useState } from 'react';
import './App.css';
import Post from './components/Post';
import Header from './components/Header';
import { POST_LIST } from './common/constant';
import NoData from './components/shared/NoData';


function App() {
  const [postlist, setPostList] = useState(POST_LIST);
  const [titleAdd, setTitleAdd] = useState('');
  const [contentAdd, setContentAdd] = useState('');
  const [statusAdd, setStatusAdd] = useState('old');
  const [id, setId] = useState(100);
  const [idDelete, setIdDelete] = useState('');
  
  const renderPostByStatus = (statusParam) => {
    let posts =  postlist.filter(value => value.status === statusParam);
    console.log(posts);
    return posts;
  }



  const addPost = evt =>{
    console.log(evt);
    if (titleAdd.length > 0 && contentAdd.length > 0) {
      let obj ={id: id,title: titleAdd,status: statusAdd,  content: contentAdd};
      let new_post = [...postlist, obj];
      setPostList(new_post);
      setId(c => ++c)
    } else {
      alert('Nhập title or content')
    }

  }

  const deletePost = evt =>{
    let new_post = postlist.filter(value => value.id !== idDelete);
    setPostList(new_post);
  }

  const titleAddChange = (evt) => {
    setTitleAdd(evt.target.value);
  }

  const statusAddChange = (evt) => {
    setStatusAdd(evt.target.value);
  }

  const contentAddChange = (evt) => {
    setContentAdd(evt.target.value);
  }

  const idInput = (evt) => {
    setIdDelete(evt.target.value);
  }


  return (
    <div className="">
      <Header></Header>
      <div>
        <label htmlFor="titleInput">Tile: </label>
        <input type='text' id='titleInput' placeholder='title' value={titleAdd} onChange={titleAddChange}></input>
        <br />
        <label htmlFor="contentInput">Content: </label>
        <input type='text' id='contentInput' placeholder='content' value={contentAdd} onChange={contentAddChange}></input>
        <br />
        <label htmlFor="status">Status: </label>
        <select id='status' value={statusAdd} onChange={statusAddChange}>
          <option value='hot'>Hot</option>
          <option value='new'>New</option>
          <option value='old'>Old</option>
        </select>
        <br />
        <button onClick={addPost}>Add post</button>
        <br />

        <label htmlFor="deleteById">Nhập id post: </label>
        <input type='text' id='deleteById' placeholder='Nhập id post cần xoá' value={idDelete} onChange={idInput}></input>
        <button onClick={deletePost} >Delete post</button>
      </div>

      <h1>Posts:</h1>

      <details>
        <summary>New posts:</summary>
        <div>
         {renderPostByStatus("new").length>0 ? renderPostByStatus("new").map(value => <Post key={value.id} post = {value}/>) : <NoData />}
        </div>
      </details>


      <details>
        <summary>Hot posts:</summary>
        <div>
         {renderPostByStatus("hot").length>0 ? renderPostByStatus("hot").map(value => <Post key={value.id} post = {value}/>) : <NoData />}
        </div>
      </details>

      <details>
        <summary>Old posts: </summary>
        <div>
         {renderPostByStatus("old").length>0 ? renderPostByStatus("old").map(value => <Post key={value.id} post = {value}/>) : <NoData />}
        </div>
      </details>

    </div>
  );
}

export default App;
