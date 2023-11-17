import { createContext, useEffect, useState } from "react"
import { createTaskRequest, getTaskRequest } from "../api/tasks";
import { CreateTask, Task } from "../interfaces/task.interface";

interface TaskContextValue {
  tasks: Task[];
  createTask: (task: CreateTask) => void;
}

export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  createTask: () => { },
})

interface Props {
  children: React.ReactNode
}


const TaskProvider: React.FC<Props> = ({ children }) => {

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {

    getTaskRequest()
      .then((res: Response) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: any) => setTasks(data)
      )
      .catch((error: Error) => console.error(error));
  }, []);
 
  const createTask = async (task: CreateTask) => {

    const res = await createTaskRequest(task)
    const data = await res.json()
    console.log(data);

    setTasks([...tasks, data])

  }

  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider
