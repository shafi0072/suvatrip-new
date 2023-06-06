import { baseUrl } from '@/src/config/serverConfig';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import screenSize from '@/src/components/desktop/core/lib/MediaQuery/ScreenSize';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@mui/material';
import RoomDetails from '@/src/components/desktop/core/modal/RoomDetails';
const ListRooms = ({ hotelInfo, setIsNewRoom }) => {
	const [data, setData] = useState([]);
	const [id, setId] = useState('');
	const [isListDetails, setIsListDetails] = useState(false);
	const [detailsData, setDetailsData] = useState({});
	const resulation = screenSize('600px');
	useEffect(() => {
		fetch(`${baseUrl}/hotel/details/hotel/${hotelInfo?._id}/rooms`)
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => {});
	}, [data]);

	useEffect(() => {
		if (data?.length > 0) {
			data
				?.filter((items, index) => {
					return items?._id === id;
				})
				.map((items) => setDetailsData(items));
		}
	}, [id, data]);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div style={{ width: '100%' }}>
			<button
				className={`btn btn-primary ${screenSize('600px') ? 'my-4' : ''}`}
				onClick={() => setIsNewRoom(true)}
			>
				Add New Room
			</button>

			{!isListDetails && (
				<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
					<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									Room Name
								</th>
								<th scope="col" className="px-6 py-3">
									Room Types
								</th>
								<th scope="col" className="px-6 py-3">
									number Of Rooms
								</th>
								<th scope="col" className="px-6 py-3">
									Price Category
								</th>
								<th scope="col" className="px-6 py-3">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{data?.length > 0 &&
								data?.map((items, index) => (
									<tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
										<th
											scope="row"
											className="d-flex align-items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											<div>
												<div
													id="tooltip-jese"
													role="tooltip"
													className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
												>
													Jese Leos
													<div
														className="tooltip-arrow"
														data-popper-arrow
													></div>
												</div>
												<img
													data-tooltip-target="tooltip-jese"
													className="w-20 h-14 rounded"
													src={items?.images[0]}
													alt="Medium avatar"
												/>
											</div>
											<span className="ml-3 text-gray-400">
												{items?.roomName}
											</span>
										</th>
										<td className="px-6 py-4">{items?.roomTypes}</td>
										<td className="px-6 py-4">{items?.numberOfRooms}</td>
										<td className="px-6 py-4">
											{items?.priceCategory?.length}
										</td>
										<td className="px-6 py-4">
											<button
												href="#"
												className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-center"
												onClick={handleClick}
											>
												<MoreVertIcon />
											</button>
											<Menu
												id="basic-menu"
												anchorEl={anchorEl}
												open={open}
												onClose={handleClose}
												MenuListProps={{
													'aria-labelledby': 'basic-button',
												}}
											>
												<MenuItem
													onClick={handleClose}
													className="bg-gray-700 text-light hover:bg-gray-800"
												>
													Edit Rooms
												</MenuItem>
												<MenuItem
													onClick={() => {
														setIsListDetails(true);
														setId(items?._id);
														setAnchorEl(null);
													}}
													className="bg-gray-700 text-light hover:bg-gray-800"
												>
													Add new price
												</MenuItem>
												<MenuItem
													onClick={handleClose}
													className="bg-gray-700 text-light hover:bg-gray-800"
												>
													Delete
												</MenuItem>
											</Menu>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			)}

			{isListDetails && (
				<RoomDetails
					open={isListDetails}
					detailsData={detailsData}
					handleClose={() => setIsListDetails(false)}
					setIsListDetails={setIsListDetails}
				/>
			)}
		</div>
	);
};

export default ListRooms;
