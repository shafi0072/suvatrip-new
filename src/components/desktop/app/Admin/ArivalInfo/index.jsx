import {
	Box,
	Button,
	Menu,
	MenuItem,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { rowsMetaStateInitializer } from '@mui/x-data-grid/internals';

const index = ({ hotelInfo }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	console.log({ booking: hotelInfo.bookings });

	return (
		<Box>
			<Box style={{ width: '100%' }} marginBottom="20px">
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell>Name</TableCell>
								<TableCell align="right">Room Name</TableCell>
								<TableCell align="right">Email</TableCell>
								<TableCell align="right">Phone No.</TableCell>
								<TableCell align="right">Check In</TableCell>
								<TableCell align="right">Check Out</TableCell>
								<TableCell align="right">Status</TableCell>
								<TableCell>Booking Coast</TableCell>
								<TableCell align="right">Button</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{hotelInfo?.bookings?.map((row, i) => (
								<TableRow
									key={i}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align="center">{row.bookingNumber}</TableCell>
									<TableCell component="th" scope="row">
										{row.userName}
									</TableCell>
									<TableCell align="right">{row.RoomName}</TableCell>
									<TableCell align="right">{row.email}</TableCell>
									<TableCell align="right">{row.phone}</TableCell>
									<TableCell align="right">
										{moment.utc(row.check_in).format('DD/MM/YYYY')}
									</TableCell>
									<TableCell align="right">
										{moment.utc(row.checkout).format('DD/MM/YYYY')}
									</TableCell>
									<TableCell align="right">{row.status}</TableCell>
									<TableCell align="right">{row.totalCost}</TableCell>

									<TableCell align="right">
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
											<MenuItem onClick={handleClose} className="text-gray-800">
												InProgress
											</MenuItem>
											<MenuItem
												onClick={() => {
													setIsListDetails(true);
													setId(items?._id);
													setAnchorEl(null);
												}}
												className="text-gray-800"
											>
												Cancel
											</MenuItem>
											<MenuItem onClick={handleClose} className="text-gray-800">
												Complete
											</MenuItem>
										</Menu>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>

			{/* <Box
				style={{ height: 400, width: '100%' }}
				marginTop="20px"
				marginBottom="20px"
			>
				<DataGrid
					rows={rows}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: { page: 0, pageSize: 5 },
						},
					}}
					pageSizeOptions={[5, 10]}
					checkboxSelection
				/>
			</Box> */}
		</Box>
	);
};

export default index;
