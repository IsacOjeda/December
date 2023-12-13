import { useState } from 'react'

const Form = ({ addToTasks }) => {

    const [task, setTask] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        addToTasks({ task, completed: false });
        setTask("");
    }

    return (
        <form onSubmit={submitForm} >
            <input
                type="text"
                onChange={(e) => setTask(e.target.value)}
                value={task}
            />
            <button>Add</button>
        </form>
    )
}

export default Form;