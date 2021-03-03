import React from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function CreateRoom() {
	const [state, setState] = useState({
		name: '',
		imageUrl: '',
		description: '',
	});

	function handleChange(event) {
		const stateBkp = { ...state };
		stateBkp[event.target.name] = event.target.value;

		setState(stateBkp);
	}

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const response = await axios.post('http://localhost:4000/room', {
				...state,
			});

			console.log(response);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div>
			<h1>New Room</h1>
			<Form state={state} onChange={handleChange} handleSubmit={handleSubmit} />
		</div>
	);
}
