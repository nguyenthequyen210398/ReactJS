import { useContext } from "react";
import { Navigate, useMatch, useParams } from "react-router";
import { StudentContext } from "./BaseStudent";

function Student() {

    const match = useMatch('home/student/:id');
    const context = useContext(StudentContext);
    const listStudent = context.studentList;
    const { studentId } = useParams();
    const studentCheck = listStudent.filter(elemen => elemen.id == studentId);
    const student = studentCheck.length > 0 ? studentCheck[0] : null;


    return <>
        {student != null ?
            (<>
            <p>Id: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Address: {student.address}</p>
            <p>Mark: {student.mark}</p>
            </>)
            : <Navigate to="/404" />}
    </>
}
export default Student;