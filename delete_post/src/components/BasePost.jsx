import { Outlet } from "react-router-dom";
import { POST_LIST } from "../common/constant";
import { useState } from "react";
import { PostListContext } from "./PostDataList";

function BasePost() {
    const [postList, setPostList] = useState(POST_LIST);
    return <PostListContext.Provider value={{ postList, setPostList }}>
        <Outlet />
    </PostListContext.Provider>
}

export default BasePost;