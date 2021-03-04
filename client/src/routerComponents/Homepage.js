import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import RoomCard from '../components/RoomCard';
import { Link } from 'react-router-dom';

export default function Homepage() {
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		async function fetchRooms() {
			try {
				const response = await axios.get('http://localhost:4000/room');

				setRooms([...response.data]);
			} catch (err) {
				console.log(err);
			}
		}
		fetchRooms();
	}, []);
	console.log(rooms);
	return (
		<div className='col-12'>
			{rooms.map((element) => {
				return (
					<Link to={`/${element._id}`}>
						<RoomCard
							name={element.name}
							image={element.imageUrl}
							description={element.description}
						/>
					</Link>
				);
			})}
		</div>
	);
}
