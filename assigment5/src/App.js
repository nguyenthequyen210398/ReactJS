import logo from './logo.svg';
import './App.css';
import Question1 from './excercise1/Question1';
import Question2 from './excercise1/Question2';
import Question3 from './excercise1/Question3';

function App() {
  return (
    <div className="">
      <div>
      <h1>Exercise 1: Lifting State Up</h1>
      <h2>Question 1: Send data từ parent  child component (down)</h2>
      <Question1></Question1>
      <h2>Question 2: Send data từ child  parent component (up)</h2>
      <Question2></Question2>
      </div>
      <h2>Question 3: Send data giữa các child components</h2>
      <Question3 />
     
    </div>
  );
}

export default App;
