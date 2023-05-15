import "./App.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')) || []);
  }, [])
  

  // Mark todo
  const markTodo = (index, todo, status) => {
    status = status?0:1; 
    todos.splice(index, 1, {todo: todo, status: status})
    localStorage.setItem('todos', JSON.stringify(todos));
    setTodos(JSON.parse(localStorage.getItem('todos')) || [])
  }

  // Delete todo
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo)=> {
        return todo.todo != id
    })
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  return (
    <div className='main-wrapper'>
      <Header todos={todos} setTodos={setTodos}/>
      <Body todos={todos} deleteTodo={deleteTodo} markTodo={markTodo}/>
      <Footer todos={todos}/>
    </div>
    );
}
export default App;