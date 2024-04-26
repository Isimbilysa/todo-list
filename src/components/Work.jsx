import { useState } from 'react';
import {  FaRegEdit } from "react-icons/fa";
import { FaCirclePlus } from 'react-icons/fa6';
import { AiTwotoneDelete } from "react-icons/ai";

const Work = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editingTaskText, setEditingTaskText] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
            setNewTask('');
        }
    };

    const editTask = (id, newText) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className='p-5'>
            <div className='flex flex-row justify-center items-center space-x-5'>
                <input
                    type="text"
                    className='rounded-lg bg-gray-800 text-white p-2'
                    placeholder='Write your next task'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <FaCirclePlus
                    className='bg-white rounded-full text-orange-500 p-2 cursor-pointer'
                    onClick={addTask}
                />
            </div>
            <div>
                <ul className='flex flex-col justify-center items-center'>
                    {tasks.map(task => (
                        <li key={task.id} className='w-1/4 h-8 bg-gray-600 border border-gray-800 rounded-md mt-3 relative'>
                            {task.id === editingTaskId ? (
                                <input
                                    type="text"
                                    value={editingTaskText}
                                    onChange={(e) => setEditingTaskText(e.target.value)}
                                    onBlur={() => {
                                        editTask(task.id, editingTaskText);
                                        setEditingTaskId(null);
                                        setEditingTaskText('');
                                    }}
                                    autoFocus
                                    className='w-full h-full bg-transparent border-none outline-none px-2 text-white'
                                />
                            ) : (
                                <>
                                    {task.text}
                                    <div className='absolute top-0 right-0 mt-1 mr-1'>
                                        <FaRegEdit onClick={() => setEditingTaskId(task.id)} className='cursor-pointer' />
                                        <AiTwotoneDelete onClick={() => deleteTask(task.id)} className='cursor-pointer ml-1' />
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Work;


