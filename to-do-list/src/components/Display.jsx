const Display = (props) => {
    const { tasks, completeTask, removeFromTasks } = props;

    return (
        <ul>
            {
                tasks.map(({ task, completed }, index) =>
                    <li key={index}>
                        {task}
                        {completed ? " Complete" : " Not Complete"}
                        <input type="checkbox"
                            checked={completed}
                            onChange={() => completeTask(index)} />
                        <button onClick={() => removeFromTasks(index)}>Delete this one!</button>

                    </li>
                )
            }
        </ul>
    )
}
export default Display;