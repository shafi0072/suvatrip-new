import {
	Box,
	Button,
	Checkbox,
	CircularProgress,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import React from 'react';
import { facilities } from '@/src/constant/admin/facality';
import Addfacility from '@/src/components/desktop/core/modal/Addfacility';
import { useState } from 'react';
import RoomPrice from '@/src/components/desktop/core/modal/RoomPrice';
import { height } from '@mui/system';
import { baseUrl } from '@/src/config/serverConfig';
import { useCallback } from 'react';
import Swal from 'sweetalert2';
import CancelIcon from '@mui/icons-material/Cancel';

const NewRooms = ({ hotelInfo, setIsNewRoom, rooomsData }) => {

	const { name, smocking, types, numberOfRooms, language } = rooomsData[0]
	const [isFacility, setIsFacility] = useState(false);
	const [isPrice, setIsPrice] = useState(false);
	const [spinner, setSpinner] = useState(false);
	const [roomData, setRoomsData] = useState({
		roomTypes: '',
		standardName: '',
		roomName: '',
		smockPolicy: '',
		numberOfRooms: '',
		roomSize: '',
		facelity: [],
		roomPriceTitle: '',
		parking: '',
		breakfast: '',
		Pricefacelity: [],
		sleep: 0,
		Per_Night: '',
		discount: '',
	});
	const [files, setFiles] = useState([]);
	const [progress, setProgress] = useState(0);
	const [isPriceCalander, setIsPriceCalander] = useState(false);
	const [timeData, setTimeData] = useState([]);
	const [schedulePrice, setSchedulePrice] = useState('');
	const [scheduleDiscount, setScheduleDiscount] = useState('');

	const handleFileChange = (e) => {
		const files = e.target.files;
		const updatedFiles = [...files];

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const image = new Image();
			image.src = URL.createObjectURL(file);

			image.onload = () => {
				const width = image.width;
				const height = image.height;
				console.log({ width });
				if (width === 500 && height === 400) {
					file.preview = URL.createObjectURL(file);
					updatedFiles.push(file);
				} else {
					Swal.fire(
						'Opps',
						'Image dimantion must need to be 500 x 400',
						'error'
					).then(() => { });
				}
				// do something with the image dimensions
			};
		}

		setFiles(updatedFiles);
	};
	const handlePropertyOnChange = (e) => {
		let newData = { ...roomData };
		newData[e.target.name] = e.target.value;
		setRoomsData(newData);
	};
	const handlePropertyOnChange2 = (e) => {
		let newData = { ...roomData };
		newData[e.target.name].push(e.target.value);
		setRoomsData(newData);
	};

	const closeFacility = () => setIsFacility(false);
	const closePrice = () => setIsPrice(false);

	const handleRemoveFile = useCallback(
		(index) => {
			const newArray = [...files.slice(0, index), ...files.slice(index + 1)];
			setFiles(newArray);
		},
		[files]
	);

	const handleUpdateSubmit = useCallback(
		(e) => {
			e.preventDefault();
			setSpinner(true);
			setProgress(25);
			const formData = new FormData();
			files.forEach((file) => {
				formData.append('files', file);
			});
			if (files.length > 0) {
				fetch(`${baseUrl}/image/upload`, {
					method: 'POST',
					body: formData,
				})
					.then((res) => res.json())
					.then((data) => {
						setProgress(50);
						if (data?.cdnUrls?.length > 0) {
							fetch(`${baseUrl}/hotel/details/hotel/${hotelInfo?._id}/rooms`, {
								method: 'PUT',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify({
									rooms: {
										roomTypes: roomData?.roomTypes,
										standardName: roomData?.standardName,
										roomName: roomData?.roomName,
										smockPolicy: roomData?.smockPolicy,
										numberOfRooms: roomData?.numberOfRooms,
										roomSize: roomData?.roomSize,
										images: data?.cdnUrls,
										facelity: roomData?.facelity,
										priceCategory: {
											roomPriceTitle: roomData?.roomPriceTitle,
											parking: roomData?.parking,
											breakfast: roomData?.breakfast,
											facelity: roomData?.Pricefacelity,
											sleep: roomData?.sleep,
											Per_Night: roomData?.Per_Night,
											discount: roomData?.discount,
											scheduleBasedPrice: {
												startDate: timeData?.length > 0 && timeData[0],
												endDate: timeData?.length > 0 && timeData[1],
												price: schedulePrice,
											},
										},
									},
								}),
							})
								.then((res) => res.json())
								.then((data) => {
									console.log(data);
									setProgress(100);
									setTimeout(() => {
										setSpinner(false);
										setProgress(0);
										setIsNewRoom(false);
									}, 1000);
								})
								.catch((err) => console.log(err));
						} else {
							Swal.fire(
								'Opps',
								'something went wrong in the server',
								'error'
							).then(() => {
								setProgress(0);
								setSpinner(false);
							});
						}
					})
					.catch((err) => {
						console.log(err.message);
						Swal.fire('Opps', 'Image need to be 500 x 400', 'error').then(
							() => {
								setProgress(0);
								setSpinner(false);
							}
						);
					});
			} else {
				Swal.fire('Opps', 'please add Minimum 4 images', 'error').then(() => {
					setProgress(0);
					setSpinner(false);
				});
			}
		},
		[roomData, files, timeData, schedulePrice]
	);
	console.log({ timeData, schedulePrice, scheduleDiscount });
	return (
		<>

			<div className="row">
				<h1 className="text-dark font-bold text-md">Add Your Rooms</h1>
				<div className="col-md-4 mt-4">
					<div className="col-md-6">
						<label htmlFor="" className="text-md font-bold">
							Standard name
						</label>
						<FormControl fullWidth className="mt-2 rounded-4">
							<InputLabel id="demo-simple-select-label">
								Standard name
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								// value={age}
								name="standardName"
								onChange={handlePropertyOnChange}
								label="Standard name"
							// onChange={handleChange}
							>
								{
									name?.map(items => <MenuItem value={items?.title}>{items?.title}</MenuItem>)
								}
								<MenuItem value={"custom"}>Custom</MenuItem>

							</Select>
						</FormControl>
					</div>
					<div className="mt-3">
						<label htmlFor="" className="text-md font-bold">
							Room Name
						</label>
						<input
							name="roomName"
							type="text"
							className="form-control mt-2 py-3"
							placeholder="Rooms Name"
							onChange={handlePropertyOnChange}
						/>
					</div>
					<div className="mt-3 row">
						<div className="col-md-6">
							<label htmlFor="" className="text-md font-bold">
								Rooms types
							</label>
							<FormControl fullWidth className="mt-2 rounded-4">
								<InputLabel id="demo-simple-select-label">
									Rooms types
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									// value={age}
									name="roomTypes"
									onChange={handlePropertyOnChange}
									label="Rooms types"
								// onChange={handleChange}
								>
									{
										types?.map(items => <MenuItem value={items?.title}>{items?.title}</MenuItem>)
									}

									{/* <MenuItem value={'20'}>Twenty</MenuItem>
									<MenuItem value={'30'}>Thirty</MenuItem> */}
								</Select>
							</FormControl>
						</div>
						<div className="col-md-6">
							<label htmlFor="" className="text-md font-bold">
								Smocking Policy
							</label>
							<FormControl fullWidth className="mt-2 rounded-4">
								<InputLabel id="demo-simple-select-label">
									Smocking Policy
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									// value={age}
									label="Smocking Policy"
								// onChange={handleChange}
								>
									{smocking?.map(items => <MenuItem value={items?.title}>{items?.title}</MenuItem>)}

									{/* <MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem> */}
								</Select>
							</FormControl>
						</div>
					</div>
					<div className="mt-3 row">
						<div className="col-md-6">
							<label htmlFor="" className="text-md font-bold">
								Numbers of Rooms
							</label>
							<FormControl fullWidth className="mt-2 rounded-4">
								<InputLabel id="demo-simple-select-label">
									Numbers of Rooms
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									// value={age}
									label="Numbers of Rooms"
									name="numberOfRooms"
									onChange={handlePropertyOnChange}
								// onChange={handleChange}
								>
									{numberOfRooms?.map(items => <MenuItem value={items?.title}>{items?.title}</MenuItem>)}
									{/* <MenuItem value={'20'}>Twenty</MenuItem>
									<MenuItem value={'30'}>Thirty</MenuItem> */}
								</Select>
							</FormControl>
						</div>
						<div className="col-md-6">
							<label htmlFor="" className="text-md font-bold">
								Room Size
							</label>
							<FormControl fullWidth className="mt-2 rounded-4">
								<InputLabel id="demo-simple-select-label">Room Size</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									// value={age}
									label="Room Size"
									name="roomSize"
									onChange={handlePropertyOnChange}
								// onChange={handleChange}
								>
									<MenuItem value={'10'}>Ten</MenuItem>
									<MenuItem value={'20'}>Twenty</MenuItem>
									<MenuItem value={'30'}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</div>
					</div>

					{/* LANGAUGE */}
					<div className="mt-3 row">
						<div className="col-md-12">
							<label htmlFor="" className="text-md font-bold">
								Language
							</label>
							<FormControl fullWidth className="mt-2 rounded-4">
								<InputLabel id="demo-simple-select-label">Language</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									// value={age}
									label="language"
									name="language"
									onChange={handlePropertyOnChange}
								// onChange={handleChange}
								>
									{language?.map(items => <MenuItem value={items?.title}>{items?.title}</MenuItem>)}
									{/* <MenuItem value={'english'}>English</MenuItem>
									<MenuItem value={'hindi'}>Hindi</MenuItem> */}
								</Select>
							</FormControl>
						</div>
					</div>
					<div className="mt-3 row">
						<div className="col-md-6">
							<button
								className="btn text-md font-bold text-sky-500"
								onClick={() => setIsFacility(true)}
							>
								Add Facilities
							</button>
						</div>
						<div className="col-md-6">
							<button
								className="btn text-md font-bold text-sky-500"
								onClick={() => setIsPrice(true)}
							>
								Add Prices
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-8  mt-4">
					<div className="row ml-5">
						{files?.length > 0 &&
							files.map((file, index) => (
								<div className="col-md-6 mt-5 relative">
									<div className="flex items-center justify-center w-full relative">
										<label
											for="dropzone-file"
											className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
										>
											<img
												src={
													typeof window.URL.createObjectURL === 'function'
														? URL?.createObjectURL(file)
														: ''
												}
												alt=""
												style={{ width: '100%', height: '250px' }}
											/>
											<div className="absolute top-2 right-2">
												<CancelIcon onClick={() => handleRemoveFile(index)} />
											</div>
										</label>
									</div>
								</div>
							))}

						{Array.from(
							{ length: files.length !== 0 ? 4 - files?.length : 4 },
							(_, index) => (
								<div className="col-md-6 mt-5">
									<div className="flex items-center justify-center w-full ">
										<label
											for="dropzone-file"
											className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
										>
											{
												<div className="flex flex-col items-center justify-center pt-5 pb-6">
													<svg
														aria-hidden="true"
														className="w-10 h-10 mb-3 text-gray-400"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
														></path>
													</svg>
													<p className="mb-2 text-sm text-gray-500">
														<span className="font-semibold">
															Click to upload
														</span>{' '}
														or drag and drop
													</p>
													<p className="text-xs text-gray-500">
														SVG, PNG, JPG or GIF (MAX. 800x400px)
													</p>
												</div>
											}

											<input
												id="dropzone-file"
												onChange={handleFileChange}
												type="file"
												className="hidden"
											/>
										</label>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-end mt-4">
				{!spinner && (
					<Button
						className="btn btn-primary bg-primary text-white"
						onClick={handleUpdateSubmit}
					>
						Update
					</Button>
				)}
				{spinner && <CircularProgress variant="determinate" value={progress} />}
				<button
					className="btn btn-secondary ml-2"
					onClick={() => setIsNewRoom(false)}
				>
					Cancel
				</button>
			</div>
			<Box>
				<Addfacility
					open={isFacility}
					handleClose={closeFacility}
					handlePropertyOnChange2={handlePropertyOnChange2}
				/>
				<RoomPrice
					isPriceCalander={isPriceCalander}
					setIsPriceCalander={setIsPriceCalander}
					timeData={timeData}
					setTimeData={setTimeData}
					schedulePrice={schedulePrice}
					setSchedulePrice={setSchedulePrice}
					scheduleDiscount={scheduleDiscount}
					setScheduleDiscount={setScheduleDiscount}
					open={isPrice}
					handleClose={closePrice}
					handlePropertyOnChange={handlePropertyOnChange}
					handlePropertyOnChange2={handlePropertyOnChange2}
				/>
			</Box>
		</>
	);
};

export default NewRooms;
