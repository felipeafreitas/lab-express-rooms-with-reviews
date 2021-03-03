import React from 'react';

export default function TextInput(props) {
	return (
		<div className='form-group'>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type={props.type}
				className='form-control'
				id={props.id}
				placeholder={props.placeholder}
				name={props.name}
				value={props.value}
				onChange={props.onChange}
			/>
		</div>
	);
}
