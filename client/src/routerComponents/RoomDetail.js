import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import AddReviewModal from '../components/AddReviewModal';

export default function RoomDetail(props) {
	const [roomDetails, setRoomDetails] = useState({
		name: '',
		imageUrl: '',
		description: '',
		reviews: [],
	});

	const history = useHistory();

	const [reviewsData, setRoomReviews] = useState({ reviews: [] });

	const [showReviewModal, setShowReviewModal] = useState(false);

	const { id } = useParams();

	useEffect(() => {
		async function fetchRoomDetails() {
			const response = await axios.get(`http://localhost:4000/room/${id}`);

			setRoomDetails({ ...response.data });
			
		}
		fetchRoomDetails();
	}, [id]);

	async function fetchRoomReviews() {
		const response = await axios.get(`http://localhost:4000/room/${id}/review`);

		setRoomReviews({ ...response.data });
	}

	useEffect(() => {
		fetchRoomReviews();
	});

	async function deleteReview(event) {
		console.log(event);
		try {
			const response = await axios.delete(
				`http://localhost:4000/review/${event.target.id}`
			);
			console.log(response);

			fetchRoomReviews();
		} catch (err) {
			console.error(err);
		}
	}

	console.log(reviewsData);

	return (
		<div className='card mt-3' style={{ width: '18rem;' }}>
			<img src={roomDetails.imageUrl} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{roomDetails.name}</h5>
				<p className='card-text'>{roomDetails.description}</p>
			</div>
			<ul className='list-group list-group-flush'>
				{reviewsData.reviews.map((element) => {
					return (
						<li className='list-group-item d-flex rom-flex justify-content-between'>
							{element.comment}
							<button
								className='btn btn-primary'
								id={element._id}
								onClick={deleteReview}
							>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
			<div className='card-body'>
				{/* <button
					onClick={() => setShowReviewModal(true)}
					className='btn btn-danger'
				>
					Add Review
				</button> */}
				<a href='#' className='card-link'>
					Delete Room
				</a>
			</div>
			<AddReviewModal
				show={showReviewModal}
				handleClose={() => setShowReviewModal(false)}
				action={`/room/${id}/review`}
				id={id}
				fetchRoomReviews={fetchRoomReviews}
			/>
		</div>
	);
}
