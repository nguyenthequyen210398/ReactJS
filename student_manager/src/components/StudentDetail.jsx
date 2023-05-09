import { useContext } from "react";
import { Navigate, useMatch, useNavigate, useParams } from "react-router";
import { StudentContext } from "./BaseStudent";

function StudentDetail() {

    const match = useMatch('home/student/:id');
    const context = useContext(StudentContext);
    const navigate = useNavigate();
    const listStudent = context.studentList;
    const { studentId } = useParams();
    const studentCheck = listStudent.filter(elemen => elemen.id == studentId);
    const student = studentCheck.length > 0 ? studentCheck[0] : null;

    const deleteStudent = () => {
        let listTemp = listStudent;
        for (let index = 0; index < listTemp.length; index++) {
            if(listTemp[index].id == studentId){
                listTemp.splice(index,1);
            }
            
        }
        context.setStudentList(listTemp);
        // navigate("/student");
    }


    return <>
        {student != null ?
            (<>
            <p>Id: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Address: {student.address} <i class="fa-solid fa-pen-to-square"></i></p> 
            <p>Mark: {student.mark} <i class="fa-solid fa-pen-to-square"></i></p> 
            <i class="fa-solid fa-trash" onClick={deleteStudent}></i>
            </>)
            : <Navigate to="/404" />}
    </>
}
export default StudentDetail;