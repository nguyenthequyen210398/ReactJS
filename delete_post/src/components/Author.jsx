import { useContext, useState } from "react";
import { PostListContext } from "./PostDataList";
import { BaseContext } from "./context/BaseProvider";

function Author ({id,name, action1, action2}){
    const contextData = useContext(PostListContext);
    const baseContext = useContext(BaseContext);
    console.log("baseContext", baseContext)
    const [isEdit, setIsEdit] = useState(false);
    const [authorValue, setAuthorValue] = useState(name);

    const iconPenClick = () => {
      setIsEdit(!isEdit);
    };

    const changeAuthorHandle = (evt) => {
        setAuthorValue(evt.target.value);
        action1(evt.target.value);
        action2();
        let newList = [];
        contextData.postList.forEach(element =>{
          if(element.id == id){
            element.author = evt.target.value
          }
          newList.push(element);
        });
        contextData.setPostList(newList);
        
    };
    return <>


    {isEdit? <div><input type="text" value={authorValue} onChange={changeAuthorHandle}></input></div>: <p>made by: <i>{authorValue}</i></p> }
    <i onClick={iconPenClick} className="fa-solid fa-pen"></i>
    <br></br>

    </> 
}


export default Author;