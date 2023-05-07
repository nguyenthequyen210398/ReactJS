import { createContext, useContext, useState } from "react";
import { POST_LIST } from "../common/constant";
import NoData from "./shared/NoData";
import Post from "./Post";
import { Link } from "react-router-dom";
import AddPost from "./AddPost";

export const PostListContext = createContext();
function PostDataList() {
    const postListContext = useContext(PostListContext);
    const postList = postListContext.postList;
    
    const [isShowAdd, setIsShowAdd] = useState(false);


    const renderPostByStatus = (statusParam) => {
        let posts = postList.filter(value => value.status === statusParam);
        console.log(posts);
        return posts;
    }
    const showContent = (value) => {
        if (value.content.length > 10) {
            return value.content.substring(0, 10) + "..."
        } else {
            return value.content;
        }
    }
    const showAddForm = () => {
        setIsShowAdd(!isShowAdd)

    }
    return <>


            <div>
                <Link to="adds" >Add new post</Link>
                {/* <button onClick={showAddForm}>Add new</button>
                {isShowAdd ? <AddPost></AddPost> : null} */}
            </div>

            <h1>Posts:</h1>
            <details>
                <summary>New posts:</summary>
                <div>
                    {/* {renderPostByStatus("new").length > 0 ? renderPostByStatus("new").map(value => <Post key={value.id} post={value} action={setPostList} />) : <NoData />} */}
                    {renderPostByStatus("new").length > 0 ? renderPostByStatus("new").map(
                        value => <><Link key={value.id} to={value.id} state={value}>{value.title} - {showContent(value)}</Link> <br></br></>) : <NoData />}
                </div>
            </details>


            <details>
                <summary>Hot posts:</summary>
                <div>
                    {/* {renderPostByStatus("hot").length > 0 ? renderPostByStatus("hot").map(value => <Post key={value.id} post={value} action={setPostList} />) : <NoData />} */}
                    {renderPostByStatus("hot").length > 0 ? renderPostByStatus("hot").map(
                        value => <><Link key={value.id} to={value.id} state={value}>{value.title} - {showContent(value)}</Link> <br></br></>) : <NoData />}

                </div>
            </details>

            <details>
                <summary>Old posts: </summary>
                <div>
                    {/* {renderPostByStatus("old").length > 0 ? renderPostByStatus("old").map(value => <Post key={value.id} post={value} action={setPostList} />) : <NoData />} */}
                    {renderPostByStatus("old").length > 0 ? renderPostByStatus("old").map(
                        value => <><Link key={value.id} to={value.id} state={value}>{value.title} - {showContent(value)}</Link> <br></br></>) : <NoData />}
                </div>
            </details>
        
    </>

}

export default PostDataList;