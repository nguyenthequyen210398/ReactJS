import React, { useContext, useState } from 'react';
import './Post.css';
import Comment from './Comment';
import Author from './Author';
import Icon from './Icon';
import { Navigate, useLocation, useMatch, useNavigate, useParams } from 'react-router-dom';
import { PostListContext } from './PostDataList';


function PostWithList(props) {
    const match = useMatch('home/post/:id');
    console.log("match", match)
    const context = useContext(PostListContext);
    const postList = context.postList;
    console.log("Post", props);
    const { postId } = useParams();
    const navigate = useNavigate();

    console.log(postId);
    // const context = useContext(PostListContext);
    const postCheck = postList.filter(ele => ele.id == postId);
    const post = postCheck.length > 0 ? postCheck[0] : null;

    const [theme, setTheme] = useState({ backgroundColor: 'white' });
    const [content, setContent] = useState(post?.content);
    const [likeNumber, setLikeNumber] = useState(0);
    const [author, setAuthor] = useState(post?.author);

    const name = post?.title;



    const showLength = () => { return content?.length; }

    const textChangeHandle = (event) => {
        setContent(event.target.value);
    }

    const iconLikeClick = () => {
        setLikeNumber(current => ++current);
        setTheme({ backgroundColor: 'black' })
    }

    const deletePost = () => {
        navigate("/post");
    }

    const deletePostHandle = () => {
        let listTemp = postList;
        for (let index = 0; index < listTemp.length; index++) {
            if(listTemp[index].id == postId){
                listTemp.splice(index,1);
            }
            
        }
        context.setPostList(listTemp);
        navigate("/home/post");
    
    }



    return <React.Fragment>
        {/* <PostListContext.Provider value={{ postList, setPostList }}> */}

        {post != null ? (<>  <h2>{name} (id:{post?.id}) <i onClick={deletePostHandle} class="fa-solid fa-trash"></i></h2> 
            <textarea id="w3review" name="w3review" rows="4" cols="50" value={content} onChange={textChangeHandle}></textarea>
            <p>~{author}~</p>
            <Author id={post?.id} name={author} action1={setAuthor}></Author>
            {likeNumber} <i onClick={iconLikeClick} className="fa fa-thumbs-up"></i>
            <br />
            <Icon id={post?.id}></Icon>
            <Comment></Comment>

            <button onClick={deletePost}>Delete Post</button>

            <p style={theme}>Leng of content: <span className='bold'>{showLength()}</span></p></>) :
            <Navigate to="/404"></Navigate>}

        {/* </PostListContext.Provider> */}


    </React.Fragment>
}


export default PostWithList;