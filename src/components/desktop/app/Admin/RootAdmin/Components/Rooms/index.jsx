import React from 'react';
import { useState } from 'react';
import ListRooms from './ListRooms';
import NewRooms from './NewRooms';
import { useContext } from 'react';
import { UserContent } from '@/src/store/AuthContent';

const index = ({ hotelInfo }) => {
	const [isNewRoom, setIsNewRoom] = useState(false);
	const {rooomsData} = useContext(UserContent)
	console.log({rooomsData})
	return (
		<div className="container mb-4">
			{!isNewRoom && (
				<ListRooms hotelInfo={hotelInfo} setIsNewRoom={setIsNewRoom} />
			)}
			{isNewRoom && (
				<NewRooms rooomsData={rooomsData} hotelInfo={hotelInfo} setIsNewRoom={setIsNewRoom} />
			)}
		</div>
	);
};

export default index;
