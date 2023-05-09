import { useContext, useState } from "react";
import { StudentContext } from "./BaseStudent";

function StudentAdd(){
    const context = useContext(StudentContext);

    const [nameAdd, setNameAdd] = useState();
    const [ageAdd, setAgeAdd] = useState();
    const [markAdd, setMarkAdd] = useState();
    const [addressAdd, setAddressAdd] = useState();
    const [id, setId] = useState();

    const nameAddChange = (e) => {
        setNameAdd(e.target.value);
    };
    const ageAddChange = (e) => {
        setAgeAdd(e.target.value);
    };
    const markAddChange = (e) => {
        setMarkAdd(e.target.value);
    };
    const addressAddChange = (e) => {
        setAddressAdd(e.target.value);
    };

    const addStudent = evt => {
        let obj = {
            id: id,
            name: nameAdd,
            age: ageAdd,
            address: addressAdd,
            mark: markAdd
        };

        let newLIst = [...context.studentList, obj];
        context.setStudentList(newLIst);
        setId(c => ++c);
        console.log(context.studentList);
    }

    return<>
    <div>
   
      
      <label htmlFor="nameInput">Name: </label>
      <input type='text' id='nameInput' placeholder='nhập name' value={nameAdd} onChange={nameAddChange}></input>
      <br />
      <label htmlFor="ageInput">Age: </label>
      <input type='text' id='ageInput' placeholder='nhập age' value={ageAdd} onChange={ageAddChange}></input>
      <br />
      <label htmlFor="markInput">Mark: </label>
      <input type='text' id='markInput' placeholder='nhập mark' value={markAdd} onChange={markAddChange}></input>
      <br />
      <label htmlFor="address">Address: </label>
      <select id='address' value={addressAdd} onChange={addressAddChange}>
        <option value='Hà Nội'>Hà Nội</option>
        <option value='Nam Định'>Nam Định</option>
        <option value='Hà Nam'>Hà Nam</option>
        <option value='Thanh Hoá'>Thanh Hoá</option>
        <option value='Thái Bình'>Thái Bình</option>
      </select>
      <br />
      <button onClick={addStudent}>Add Student</button>
      <br />

     
    </div>
   
    </>

}

export default StudentAdd;