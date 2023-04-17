import logo from './logo.svg';
import './App.css';
import Question1 from './excercise1/Question1'; 
import Question2 from './excercise1/Question2'; 
import Question3 from './excercise1/Question3'; 
import Question4 from './excercise1/Question4'; 

function App() {
  return (
    <div>
      <h3>Excercise 1: JSX</h3>
      <p><b>Question1:React.createElement()</b></p>
      <Question1></Question1>

      <p><b>Question2:Basic</b></p>
      <Question2></Question2>

      <p><b>Question3: style</b></p>
      <Question3></Question3>

      <p><b>Question 4: Expression JSX</b></p>
      <Question4></Question4>



    </div>
    


  );
}

export default App;
