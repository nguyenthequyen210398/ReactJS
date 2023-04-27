import logo from './logo.svg';
import './App.css';
import Question1 from './excercise1/Question1';
import Question2 from './excercise1/Question2';
import Question3 from './excercise1/Question3';
import Question1E2 from './excercise2/Question1E2';

function App() {
  return <>
      <div>
      <h1>Exercise 1: Lifting State Up</h1>
      <h2>Question 1: Send data từ parent  child component (down)</h2>
      <Question1></Question1>
      <h2>Question 2: Send data từ child  parent component (up)</h2>
      <Question2></Question2>
      <h2>Question 3: Send data giữa các child components</h2>
      <Question3 />
      </div>
      
      <div>
        <h1>Exercise 2: Context</h1>
        <h2>Question 1:</h2>
         <Question1E2 /> 
      </div>
     
   

  
    </>
}

export default App;
