import AddToDo from "./Components/addToDo";
import Navbar from "./Components/navbar";
import Todos from "./Components/todos";

const App = () => {
  return (
    <main>
      <h1 className="h1">TODO REACT + TYPESCRIPT</h1>
      <Navbar/>
      <AddToDo />
      <Todos />
    </main>
  )
}

export default App;