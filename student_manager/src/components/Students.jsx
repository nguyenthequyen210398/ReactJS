import { useContext } from "react";
import { StudentContext } from "./BaseStudent";
import { Link } from "react-router-dom";

function Students() {
    const context = useContext(StudentContext);
    const listStudent = context.studentList;
    console.log(listStudent)

    
    return <>
        <h2>Danh sách student:</h2>
        {listStudent.map(
            value => <> <Link key={value.id} to={value.id} state={value}>
                {value.name}
            </Link><br /></>
            
        )}
        <div>
            <Link to="adds">Add student</Link>
        </div>
    </>

}
export default Students;