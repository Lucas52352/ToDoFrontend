import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from '../interfaces/task.interface'
import { useTasks } from '../context/userTasks'

const TaskForm = () => {

    const [task, setTask] = useState<Task>({
        title: '',
        description: '',
        done: false,
    })

    const { createTask } = useTasks();

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTask({ ...task, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        createTask(task)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='title'
                    className='border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2'
                    placeholder='Write a title'
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    rows={3}
                    className='border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2'
                    placeholder='Write a description'
                    onChange={handleChange}
                ></textarea>

                <label htmlFor="" className='inline-flex items-center gap-x-2'>
                    <input
                        type="checkbox"
                        className='h-5 w-5 text-indigo-600'
                        onChange={(_event) => {
                            setTask({ ...task, done: !task.done })
                        }}
                    />
                    <span>Done</span>
                </label>

                <button className='bg-indigo-500 px-3 block py-2 w-full'>
                    Save
                </button>
            </form>
        </div>
    )
}

export default TaskForm