import Header from "./components/Header";
import BoardsList from "./components/BoardsList";

function App() {
  return (
    <>
      <h1 className="title">Планировщик задач</h1>
      <div className="wrapper">
        <Header />
        <BoardsList />
      </div>
    </>
  );
}

export default App;
