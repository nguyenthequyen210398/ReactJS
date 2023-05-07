import { useContext } from "react";
import { PostListContext } from "./PostDataList";



function Icon({id}){
    const context = useContext(PostListContext);
    const posts = context?.postList;
    const post = posts?.filter(e => e.id == id)[0];
    
    const like = post?.like;
    const heart = post?.heart;
    const shared = post?.shared;

    const likeChange = () => {
        let newList = [];
        context?.postList.forEach(element =>{
          if(element.id == id){
            element.like += 1
          }
          newList.push(element);
        });
        context?.setPostList(newList);

    }
    const heartChange = () => {
        let newList = [];
        context?.postList.forEach(element =>{
          if(element.id == id){
            element.heart += 1
          }
          newList.push(element);
        });
        context?.setPostList(newList);

    }
    const sharedChange = () => {
        let newList = [];
        context?.postList.forEach(element =>{
          if(element.id == id){
            element.shared += 1
          }
          newList.push(element);
        });
        context?.setPostList(newList);

    }
    

    return <>
    <i class="fa-solid fa-thumbs-up" onClick={likeChange}></i>{like}
    <i class="fa-solid fa-heart" onClick={heartChange}></i>{heart}
    <i class="fa-solid fa-share" onClick={sharedChange}></i>{shared}
    </>

}

export default Icon;