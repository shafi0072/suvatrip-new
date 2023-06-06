import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, Switch, TextField } from '@mui/material';
import { baseUrl } from '@/src/config/serverConfig';

export default function index({ hotelInfo }) {
	const [isVat, setIsVat] = useState(false);
	const [changedVat, setChangeVat] = useState(0);
	const [isTax, setIsTax] = useState(false);
	const [changedTax, setChangeTax] = useState(0);
	const [children, setChildren] = useState('');
	const [pets, setPets] = useState('');
	const [checkIn, setCheckIn] = useState('');
	const [checkOut, setCheckOut] = useState('12:00');
	const [accidentalBooking, setAccidentalBooking] = useState(false);

	console.log(changedVat, changedTax)
	const handleOnSave = () => {
		fetch(`${baseUrl}/hotel/details/hotel/${hotelInfo?._id}/checkinTime`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				checkinTime: checkIn,
			}),
			redirect: 'follow',
		})
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// const checkinTime = (e) => {

	// };

	const handelVat = () => {
		fetch(`${baseUrl}/hotel/details/hotel/${hotelInfo?._id}/vatInfo`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				vatInfo: parseInt(changedVat),
			}),
			redirect: 'follow',
		})
			.then((response) => response.json())
			.then((result) => {
				if (result) {
					setEdit(false);
					setOverViewEdit(false);
				}
			})
			.catch((err) => {});

		setIsVat(!isVat);
	};

	console.log(hotelInfo?._id);

	const handelTax = () => {
		fetch(`${baseUrl}/hotel/details/hotel/${hotelInfo?._id}/taxInfo`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				taxInfo: parseInt(changedTax),
			}),
			redirect: 'follow',
		})
			.then((response) => response.json())
			.then((result) => {
				if (result) {
					setEdit(false);
					setOverViewEdit(false);
				}
			})
			.catch((err) => {});
		setIsTax(!isTax);
	};

	return (
		<div>
			<div className="px-4 sm:px-0">
				<h3 className="text-base font-semibold leading-7 text-gray-900">
					privecy & policy settings
				</h3>
				<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
					privecy details and policy.
				</p>
			</div>
			<div className="mt-6 border-t border-gray-100">
				<dl className="divide-y divide-gray-100">
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 flex h-auto justify-center items-center">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Check in time
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							<select
								data-te-select-init
								onChange={(e) => {
									setCheckIn(e.target.value);
								}}
							>
								<option selected value="12:00">
									12:00
								</option>
								<option value="12:30">12:30</option>
							</select>
						</dd>
						{checkIn && (
							<Box>
								<Button
									variant="outlined"
									className="custom_red_color text-light"
									style={{ marginRight: '5px' }}
								>
									Cancel
								</Button>
								<Button
									onClick={handleOnSave}
									variant="contained"
									className="custom_green_color"
								>
									Save
								</Button>
							</Box>
						)}
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Check out time
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							<select
								data-te-select-init
								onChange={(e) => {
									fetch(
										`${baseUrl}/hotel/details/hotel/${hotelInfo?._id}/checkOutTime`,
										{
											method: 'PUT',
											headers: {
												'Content-Type': 'application/json',
											},
											body: JSON.stringify({
												checkOutTime: e.target.value,
											}),
											redirect: 'follow',
										}
									)
										.then((response) => response.json())
										.then((result) => {
											console.log(result);
										})
										.catch((err) => {
											console.log(err);
										});

									setCheckOut(e.target.value);
								}}
							>
								<option selected value="12:00">
									12:00
								</option>
								<option value="12:30">12:30</option>
							</select>
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Children
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							<div class="flex items-center mb-4">
								<input
									id="Children-allow"
									type="radio"
									value="Yes"
									name="Children"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
									onClick={(e) => setChildren(e.target.value)}
								/>
								<label
									for="Children-allow"
									class="ml-2 text-sm font-medium text-gray-900 "
								>
									Yes
								</label>
							</div>
							<div class="flex items-center">
								<input
									id="Children-notAllow"
									type="radio"
									value="No"
									name="Children"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
									onClick={(e) => setChildren(e.target.value)}
								/>
								<label
									for="Children-notAllow"
									class="ml-2 text-sm font-medium text-gray-900 "
								>
									No
								</label>
							</div>
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Pets
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							<div class="flex items-center mb-4">
								<input
									id="Pets-allow"
									type="radio"
									value="Yes"
									name="Pets"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
									onClick={(e) => setPets(e.target.value)}
								/>
								<label
									for="Pets-allow"
									class="ml-2 text-sm font-medium text-gray-900 "
								>
									Yes
								</label>
							</div>
							<div class="flex items-center">
								<input
									id="Pets-notAllow"
									type="radio"
									value="No"
									name="Pets"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
									onClick={(e) => setPets(e.target.value)}
								/>
								<label
									for="Pets-notAllow"
									class="ml-2 text-sm font-medium text-gray-900 "
								>
									No
								</label>
							</div>
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Tax info
						</dt>
						{!isTax ? (
							<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
								{changedTax}%
								<Button
									variant="outlined"
									className="custom_green_color ml-4 text-white"
									onClick={(e) => setIsTax(!isTax)}
								>
									Change Tax Rate
								</Button>
								{/* <CheckIcon className="text-green-500" /> Valid */}
							</dd>
						) : (
							<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 justify-center items-center h-auto">
								<TextField
									label="Change Vat Rate"
									color="secondary"
									focused
									onChange={(e) => setChangeTax(e.target.value)}
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
									onClick={handleOnSave}
									variant="contained"
									className="custom_green_color"
									style={{ marginTop: '10px' }}
									onClick={handelTax}
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
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Vat info
						</dt>
						{!isVat ? (
							<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
								{changedVat}%
								<Button
									variant="outlined"
									className="custom_green_color ml-4 text-white"
									onClick={(e) => setIsVat(!isVat)}
								>
									Change Vat Rate
								</Button>
								{/* <CheckIcon className="text-green-500" /> Valid */}
							</dd>
						) : (
							<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 justify-center items-center h-auto">
								<TextField
									label="Change Vat Rate"
									color="secondary"
									focused
									onChange={(e) => setChangeVat(e.target.value)}
								/>

								<Button
									variant="outlined"
									className="custom_red_color text-light"
									style={{
										marginLeft: '5px',
										marginRight: '5px',
										marginTop: '10px',
									}}
									onClick={(e) => setIsVat(!isVat)}
								>
									Cancel
								</Button>
								<Button
									onClick={handleOnSave}
									variant="contained"
									className="custom_green_color"
									style={{ marginTop: '10px' }}
									onClick={handelVat}
								>
									Save
								</Button>

								{/* <CheckIcon className="text-green-500" /> Valid */}
							</dd>
						)}
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Phone
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							<CheckIcon className="text-green-500" /> Valid
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Email
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							<CheckIcon className="text-green-500" /> Valid
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							protect accidental booking
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							{' '}
							<Switch
								onChange={(e) => {
									setAccidentalBooking(e.target.checked);
									setTimeout((e) => {
										fetch(
											`${baseUrl}/hotel/details/hotel/${hotelInfo?._id}/protectAccidental`,
											{
												method: 'PUT',
												headers: {
													'Content-Type': 'application/json',
												},
												body: JSON.stringify({
													protectAccidental: accidentalBooking,
												}),
												redirect: 'follow',
											}
										)
											.then((response) => response.json())
											.then((result) => {
												console.log(result);
											})
											.catch((err) => {
												console.log(err);
											});
									}, 2000);
								}}
								color="warning"
							/>
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Comission
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							{' '}
							12% <CheckIcon className="text-green-500" /> Verified
						</dd>
					</div>
				</dl>
			</div>
		</div>
	);
}
