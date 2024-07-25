import React from 'react'

const Todo = ({ id, title, description, completed, deleteTodo, mongoId, updateTodo }) => {
    console.log(completed)
    return (
        <tr className="bg-white border-b ">
            <td scope="row" className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap">
                {id}
            </td>
            <td className="px-6 py-4 text-center">
                {title}
            </td>
            <td className="px-6 py-4 text-center">
                {description}
            </td>
            <td className="px-6 py-4 text-center">
                {completed === true ? "Completed" : "Pending"}
            </td>
            <td className="px-6 py-4 flex gap-1" style={{ justifyContent: 'center' }}>
                <button onClick={() => deleteTodo(mongoId)} className='py-2 px-4 bg-red-500 text-white'>
                    Delete
                </button>
                <button className='py-2 px-4 bg-green-500 text-white' onClick={() => updateTodo(mongoId)}>
                    Done
                </button>
            </td>
        </tr>
    )
}

export default Todo;
