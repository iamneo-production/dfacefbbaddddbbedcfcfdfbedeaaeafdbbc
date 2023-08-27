import logo from './logo.svg';
import './App.css';

function App() {
  const [QuizzStarted, setQuizzStarted] = useState(false);
  const handleClick = () => {
    setQuizzStarted(!QuizzStarted);
  }
  return (
    <div className="App">
      <h1>Quizz App</h1>
      <button onClick={handleClick}>{QuizzStarted? "Show Results" : "Start Quiz"}</button>
    </div>
  );
}

export default App;
