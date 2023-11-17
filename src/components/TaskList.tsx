import { useEffect, useState } from 'react'
import { getTaskRequest } from '../api/tasks'
import { Task } from '../interfaces/task.interface';
import TaskItem from './TaskItem';

const TaskList = () => {

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {

    getTaskRequest()
      .then((res: Response) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: any) => setTasks(data))
      .catch((error: Error) => console.error(error));
  }, []);

  return (
    <div>
      {
        tasks.map(task => (
          <TaskItem task={task} key={task._id}/>
        ))
      }
    </div>
  )
}

export default TaskList