import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, toggleComplete } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch()

	const handleComplete = () => {
		dispatch(toggleComplete({
			id: id,
			completed: !completed
		}))
	}

	const handleDelete = () => {
		dispatch(deleteTodo({
			id: id
		}))
	}

	const handleEdit = ()=>{
		dispatch(editTodo({
			id:id,
			title:""
		}))
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed} onChange={handleComplete}></input>
					<span className='m-3'>{title}</span>
				</span>
				<div className='d-flex align-items-center justify-content-center gap-2'>
					<button className='btn btn-success' onClick={""}>Edit</button>
					<button className='btn btn-danger' onClick={handleDelete}>Delete</button>
				</div>
			</div>
		</li>
	);
};

export default TodoItem;
