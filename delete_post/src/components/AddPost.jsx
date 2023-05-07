import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { PostListContext } from "./PostDataList";

function AddPost() {
  const context = useContext(PostListContext);
  const [titleAdd, setTitleAdd] = useState('');
  const [contentAdd, setContentAdd] = useState('');
  const [statusAdd, setStatusAdd] = useState('old');
  const [id, setId] = useState(100);
  const [idDelete, setIdDelete] = useState('');





  const addPost = evt => {
    console.log(evt);
    if (titleAdd.length > 0 && contentAdd.length > 0) {
      let obj = { id: id, title: titleAdd, like: 0, heart:0, shared:0, author:"ntq", status: statusAdd, content: contentAdd };
      let new_post = [...context.postList, obj];
      context.setPostList(new_post);
      setId(c => ++c)
    } else {
      alert('Nhập title or content')
    }

  }

  const deletePost = () => {
    // let new_post = postList.filter(value => value.id !== idDelete);
    // setPostList(new_post);
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


  return <>
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
  </>

}

export default AddPost;