import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Homepage() {
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		async function fetchRooms() {
			try {
				const response = await axios.get('http://localhost:4000/room');

				console.log(response);

				setRooms([...response.data]);

				console.log(rooms);
			} catch (err) {
				console.log(err);
			}
		}
		fetchRooms();
	}, []);

	return (
		<div>
			<div className='card mb-3'>
				<img
					className='card-img-top'
					src={rooms.imageURL}
					alt='Card image cap'
				/>
				<div className='card-body'>
					<h5 className='card-title'>{rooms.name}</h5>
					<p className='card-text'>
						This is a wider card with supporting text below as a natural lead-in
						to additional content. This content is a little bit longer.
					</p>
					<p className='card-text'>
						<small className='text-muted'>Last updated 3 mins ago</small>
					</p>
				</div>
			</div>
		</div>
	);
}
