import styles from './Task.module.css'

export const Task = (props) => {
    return <div className={styles.disTask} style={{backgroundColor : props.completed ? "#acb7ae" : "white"}}>
    <h2>{props.taskName}</h2>
    <button onClick={() => props.completedTask(props.id)}>Completed</button>
    <button onClick={() => props.deleteTask(props.id)}>×</button>
    </div>;
}