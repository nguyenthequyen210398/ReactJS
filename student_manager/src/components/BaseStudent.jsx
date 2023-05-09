import { createContext, useState } from "react";
import { STUDENTS } from "../common/constant";
import { Outlet } from "react-router";

export const  StudentContext = createContext();
function BaseStudent(){
    const [studentList, setStudentList] = useState(STUDENTS);
    return <StudentContext.Provider value={{studentList, setStudentList}}>
    <Outlet />
    </StudentContext.Provider>
}

export default BaseStudent;