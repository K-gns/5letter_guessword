import "./App.css";
import GuessWordGame from "./components/GuessWordGame";

function App() {
  const darkHandler = (dark) => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  return (
      <div className={"app dark:bg-zinc-800"}>
        <GuessWordGame darkness={darkHandler} />
      </div>
  );
}

export default App;
