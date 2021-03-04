import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams, Link, useHistory } from 'react-router-dom';
import TextAreaInput from './TextAreaInput';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddReviewModal(props) {
	const [state, setState] = useState({
		comment: '',
	});

	const history = useHistory();

	function handleChange(event) {
		const stateBkp = { ...state };
		stateBkp[event.target.name] = event.target.value;

		setState(stateBkp);
		console.log(state);
	}

	async function handleSubmit(event) {
		console.log('run');
		event.preventDefault();
		try {
			console.log('run');
			const response = await axios.post(
				`http://localhost:4000/room/${props.id}/review`,
				{
					...state,
				}
			);

			console.log(state);
			history.push(`/`);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			{/* <Modal show={props.show} onHide={props.handleClose} onSubmit={handleSubmit}>
				<Modal.Header closeButton>
					<Modal.Title>Add Review</Modal.Title>
				</Modal.Header>
				<Modal.Body> */}
			<TextAreaInput
				label='Review'
				type='text'
				id='roomFormReview'
				name='comment'
				value={state.comment}
				onChange={handleChange}
			/>
			{/* </Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={props.handleClose}>
						Close
					</Button> */}
			<button type='submit' className='btn btn-danger'>
				Confirm
			</button>
			{/* </Modal.Footer>
			</Modal> */}
		</form>
	);
}
