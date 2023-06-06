import React from 'react';
import { useRouter } from 'next/router';
import Details from '../../../src/components/desktop/app/listing/Details';

const HoteId = () => {
	const router = useRouter();
	const { hoteId, adults, age, checkIn, checkOut, children, rooms } = router.query;

	const bookingQuery = { hoteId, adults, age, checkIn, checkOut, children, rooms }

	return (
		<div>
			<Details id={hoteId} bookingQuery={bookingQuery}/>
		</div>
	);
};

export default HoteId;
