import React from 'react';

export default function RoomCard(props) {
	return (
		<div className='card mb-3'>
			<img className='card-img-top' src={props.image} alt='Card image cap' />
			<div className='card-body'>
				<h5 className='card-title'>{props.name}</h5>
				<p className='card-text'>{props.description}</p>
			</div>
		</div>
	);
}
