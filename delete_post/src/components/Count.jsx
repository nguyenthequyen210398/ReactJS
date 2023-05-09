import { useEffect, useState } from "react";

function Count (){
    const[count, setCount] = useState(0);
    useEffect(() => {
       let date = new Date();
       setCount(date.getDate());
    });
    return<>
    <p>Count {count}</p>
    <button onClick={() => {setCount(count + 1)}}>Click me</button>
    </>
}
export default Count;