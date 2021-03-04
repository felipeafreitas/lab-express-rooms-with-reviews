import React from 'react';
import TextInput from './TextInput';
import TextAreaInput from './TextAreaInput';
import { Link } from 'react-router-dom';

export default function Form(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<TextInput
				label='Title'
				type='text'
				id='roomFormName'
				name='name'
				value={props.state.name}
				onChange={props.onChange}
			/>
			<TextInput
				label='Image URL'
				type='text'
				id='roomFormImage'
				name='imageUrl'
				value={props.state.imageUrl}
				onChange={props.onChange}
			/>
			<TextAreaInput
				label='Description'
				type='text'
				id='roomFormDescription'
				name='description'
				value={props.state.description}
				onChange={props.onChange}
			/>
			<Link to='/'>
				<button type='submit' className='btn btn-primary'>
					Save
				</button>
			</Link>
		</form>
	);
}
