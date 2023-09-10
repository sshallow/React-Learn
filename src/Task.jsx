export const Task = (props) => {
    return <div key={props.id}>{props.taskName}
        <button onClick={() => props.deleteTask(props.id)}>
            delete
        </button>
    </div>
}