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

			props.fetchRoomReviews()
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<TextAreaInput
				label='Review'
				type='text'
				id='roomFormReview'
				name='comment'
				value={state.comment}
				onChange={handleChange}
			/>
			<button type='submit' className='btn btn-danger'>
				Confirm
			</button>
		</form>
	);
}
