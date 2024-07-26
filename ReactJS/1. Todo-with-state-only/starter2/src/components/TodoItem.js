import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, toggleComplete } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch()
	const [editVal, setEditVal] = useState("")
	const [editMode, setEditMode] = useState(false)

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

	const handleEdit = () => {
		dispatch(editTodo({
			id: id,
			title: editVal
		}))
		setEditMode(false)
	}

	const clickEdit = () => {
		setEditVal(title)
		setEditMode(true)
	}

	const cancelEdit = () => {
		setEditMode(false)
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex gap-2 align-items-center'>
					{editMode === false && (
						<>
							<input type='checkbox' className='mr-3' checked={completed} onChange={handleComplete}></input>
							<span className='m-3'>{title}</span>
						</>
					)}
					{editMode && (
						<>
							<input type="text" className='form-control' value={editVal} onChange={(e) => setEditVal(e.target.value)} />
							<button className='btn btn-primary' onClick={handleEdit}>Submit</button>
							<button className='btn btn-danger' onClick={cancelEdit}>Cancel</button>
						</>
					)}
				</span>
				<div className='d-flex align-items-center justify-content-center gap-2'>
					<button className='btn btn-success' onClick={clickEdit}>Edit</button>
					<button className='btn btn-danger' onClick={handleDelete}>Delete</button>
				</div>
			</div>
		</li>
	);
};

export default TodoItem;
