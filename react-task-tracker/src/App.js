import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState( [])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // fetch tasks from "backend"
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  // fetch single task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }


  //add task
  const addTask = async (task) => {
      const res = await fetch(`http://localhost:5000/tasks`, {
        method: 'POST',
        headers: {
          'Content-type':'application-json'
        },
        body: JSON.stringify(task)
      })

      const newTask = await res.json()
      setTasks([...tasks, newTask])
      // const id = Math.floor(Math.random() * 10000) + 1
      // const newTask = {id, ...task }
      // setTasks([...tasks, newTask])
    }


  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder}
     const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json()

    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder: data.reminder } 
      : task))
  }

  return (
    <div className='container'>
      <Header title='Tasks' onAdd={() => setShowAddTask(!showAddTask) } showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />} 
      {tasks.length > 0 ? 
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
      : ('No tasks found') }
      {/* como hacer operador ternario pero sin el else */}
    </div>
  );
}

export default App;
