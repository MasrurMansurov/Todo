import Add from "./components/add-form/Add";
import Item from "./components/item-filter/Item";
import List from "./components/todo-list/List";
import "./App.scss"

function App() {
  return (
    <>
      <div className="header">
        <h1 className="todo">To Do List</h1>
        <Item/>
      </div>
      <List/>
      <Add/>
    </>
  )
}

export default App
