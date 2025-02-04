import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('please add text')
            return
        }
        onAdd({ text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={onSubmit} >
      <div className="form-control">
        <label>Task</label>
        <input type='text' placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input type='text' placeholder="Add day and time" value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>
        <input type="submit" className="btn btn-block" value='Save task' />
    </form>
  )
}

export default AddTask
