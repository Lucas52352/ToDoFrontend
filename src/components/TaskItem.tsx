import { Task } from "../interfaces/task.interface"

interface Props {
  task: Task
}

const TaskItem = ({ task }: Props) => {
  return (
    <div key={task._id} className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 cursor-pointer">
      <div>

      <h1>{task.title}</h1>
      <p>{task.description}</p>
      </div>

      <div className="flex gap-2">
        <button className="bg-gray-500 hover:bg-green-600">update</button>
        <button className="bg-gray-500 hover:bg-red-600">delete</button>
      </div>
    </div>
  )
}

export default TaskItem