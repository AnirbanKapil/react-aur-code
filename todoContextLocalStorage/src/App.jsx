import { useEffect, useState } from "react"
import { ToDoProvider } from "./contexts";
import  { TodoForm , TodoItem } from "./components/index";


function App() {

  const [todos,setToDo] = useState([]);

  const addToDo = (todo) => {
    setToDo((preV)=> [{id: Date.now(),...todo},...preV])
  };

  const updateToDo = (id,todo) => {
    setToDo((preV) => preV.map((preToDo)=> preToDo.id === id ? todo : preToDo))
  };

  const deleteToDo = (id) => {
     setToDo((preV)=> preV.filter((todo)=> todo.id !== id))
  }

  const toggleComplete = (id) => {
      setToDo((preV)=> preV.map((todo)=> todo.id == id ? {...todo,completed : !todo.completed} : todo))
  }
  
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0) {
      setToDo(todos)
    } 
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos]);
  

  return (
    <ToDoProvider value={{todos,addToDo,updateToDo,deleteToDo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=> (
                          <div key={todo.id} className="w-full">
                             <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
  </ToDoProvider>
  )
}

export default App
