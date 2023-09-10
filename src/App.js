import './App.css';
import {User} from './User';
import {Planet} from "./Planet";
import {useState} from "react";
import {Task} from "./Task";

function App() {

    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState('')

    const AddTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask
        }
        setTodoList([...todoList, task])
        console.log(todoList)
    }

    const deleteTask = (id) => {
        const newArr = todoList.filter(item => item.id !== id)
        setTodoList(newArr)
    }

    const handleChange = (event) => {
        setNewTask(event.target.value)
    }

    return (
        <div className="App">
            <div className="addTask">
                <input type="text" onChange={handleChange}/>
                <button onClick={AddTask}> add Task</button>
            </div>
            <div className="list">
                {
                    todoList.map((task, index) => {
                        return <Task taskName={task.taskName} id={task.id} key={task.id} deleteTask={deleteTask}/>
                    })
                }
            </div>
        </div>
    )
}

export default App;
