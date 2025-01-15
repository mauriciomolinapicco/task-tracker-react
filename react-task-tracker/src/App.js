import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState( [
    {
        id: 1,
        text: 'Comprar comida',
        day: 'Jan 1 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'gimnasio',
        day: 'Everyday 5pm',
        reminder: true
    }
])
//add task
const addTask = (task) => {
  console.log(task)
}

//delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
    task.id === id ? { ...task, reminder: !task.reminder } 
    : task))
}

  return (
    <div className='container'>
      <Header title='Tasks'/>
      {tasks.length > 0 ? 
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
      : ('No tasks found') }
      <AddTask onAdd={addTask} />
    </div>
  );
}

export default App;
