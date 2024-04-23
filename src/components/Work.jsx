import React,{useState} from 'react'
import { FaCirclePlus } from "react-icons/fa6";
const Work = () => {
    const[tasks, setTasks]=useState([])
    const [newTask, setNewTask] = useState('');
    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
            setNewTask('');
        }
    };
  return (
    <div className=''>
      <div className='flex flex-row justify-center items-center  space-x-5 '>
        <input type="text" 
        className='rounded-lg bg-neutral-800 w-1/4 text-white '
        placeholder='Write your next task'
        />
        <FaCirclePlus className='bg-black rounded-full text-orange-500 size-9'onClick={addTask} />
      </div>
    </div>
  )
}

export default Work;
