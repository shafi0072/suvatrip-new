import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Dates from '../../../../Landing/Home/Header/Core/Date';

const index = () => {
	const today = new Date(); // Get today's date
	const tomorrow = new Date(today); // Copy today's date to a new object
	tomorrow.setDate(today.getDate() + 1); // Set the date to tomorrow

	const [isTax, setIsTax] = useState(false);
	const [value, setValue] = useState([today.getTime(), tomorrow.getTime()]);

	console.log(value);

	const handleDateChange = (e) => {
		setValue(e);
	};
	return (
		<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
			<dt className="text-sm font-medium leading-6 text-gray-900">Schedule</dt>
			{!isTax ? (
				<dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
					{value.map((date, i) => (
						<Typography>
							{i === 0
								? `${date.$D}/${date.$M}/${date.$y} - `
								: `${date.$D}/${date.$M}/${date.$y}`}
						</Typography>
					))}
					<Button
						variant="outlined"
						className="custom_green_color ml-4 text-white"
						onClick={(e) => setIsTax(!isTax)}
					>
						Change Schedule
					</Button>
					{/* <CheckIcon className="text-green-500" /> Valid */}
				</dd>
			) : (
				<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 justify-center items-center h-auto">
					<Dates
						value={value}
						setValue={setValue}
						handleDateChange={handleDateChange}
					/>

					<Button
						variant="outlined"
						className="custom_red_color text-light"
						style={{
							marginLeft: '5px',
							marginRight: '5px',
							marginTop: '10px',
						}}
						onClick={(e) => setIsTax(!isTax)}
					>
						Cancel
					</Button>
					<Button
						// onClick={handleOnSave}
						variant="contained"
						className="custom_green_color"
						style={{ marginTop: '10px' }}
						onClick={(e) => setIsTax(!isTax)}
					>
						Save
					</Button>

					{/* <CheckIcon className="text-green-500" /> Valid */}
				</dd>
			)}

			{/* <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							<CheckIcon className="text-green-500" /> Valid
						</dd> */}
		</div>
	);
};

export default index;
