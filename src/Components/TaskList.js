const TaskList = ({tasks}) => {
    return (
        <div>
            <h2>Tareas</h2>
            {tasks?.length > 0 && tasks.map(task => (
            <div key={task.id}>
                <h4>{task.name}</h4>
                <p>{task.description}</p>

            </div>
            ))}
        </div>
     );
}

export default TaskList;