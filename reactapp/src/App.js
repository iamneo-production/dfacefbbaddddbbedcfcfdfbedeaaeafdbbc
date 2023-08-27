import {useState} from 'react';
import './App.css';

function App() {
  const [QuizzStarted, setQuizzStarted] = useState(false);
  const handleClick = () => {
    setQuizzStarted(!QuizzStarted);
  }
  return (
    <div className="App">
      <h1>Quizz App</h1>
      {
      QuizzStarted? 
        <button onClick={handleClick}>Show Results</button> 
        : 
        <button onClick={handleClick}>Start Quiz</button>
      }
    </div>
  );
}

export default App;
