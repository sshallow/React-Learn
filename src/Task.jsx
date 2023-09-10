export const Task = (props) => {
    return <div  style={props.completed === true ?  {backgroundColor :"green"} : {}}>{props.taskName}
        <button onClick={() => props.completedTask(props.id)}>
            completed
        </button>
        <button onClick={() => props.deleteTask(props.id)}>
            x
        </button>
    </div>
}