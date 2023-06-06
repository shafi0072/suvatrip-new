import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { useEffect } from 'react';
import { baseUrl } from '@/src/config/serverConfig';
import { categoryData } from '@/src/constant/Enhance/CategoryData';
import StarCounting from '@/src/components/desktop/core/lib/startCounting';
import { Switch } from '@mui/material';

const index = ({ hotelInfo, setHotelInfo }) => {
	const [edit, setEdit] = useState(false);
	const [overView, setOverView] = useState('');
	const [overViewEdit, setOverViewEdit] = useState(false);
	const handleUpdate = (e) => {
		e.preventDefault();
		fetch(`${baseUrl}/hotel/details/hotel/${hotelInfo?._id}/overView`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				overView: overView,
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
	};

	const handleOverViewToggle = () => {
		setOverViewEdit(!overViewEdit);
	};

	return (
		<div className="d-flex justify-content-center mb-2">
			<div className="sm:ml-2">
				<div class="">
					<div class="p-4 bg-white shadow mt-24">
						<div class="grid grid-cols-1 md:grid-cols-3">
							<div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
								<div>
									<p class="font-bold text-gray-700 text-sm">
										{hotelInfo?.rooms?.length}
									</p>
									<p class="text-gray-400">Rooms</p>
								</div>
								<div>
									<p class="font-bold text-gray-700 text-sm">
										{hotelInfo?.images?.length}
									</p>
									<p class="text-gray-400">Photos</p>
								</div>
								<div>
									<p class="font-bold text-gray-700 text-sm">
										{hotelInfo?.images?.length}
									</p>
									<p class="text-gray-400">Price Categories</p>
								</div>
							</div>
							<div class="relative">
								<div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
									<img
										src={hotelInfo?.images && hotelInfo?.images[0]}
										className="rounded-full w-48 h-48 "
										alt=""
									/>
									<label
										htmlFor="image-file"
										className="absolute cursor-pointer"
									>
										{' '}
										<EditIcon />
									</label>
									<input type="file" name="" id="image-file" className="none" />
								</div>
							</div>

							<div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
								<button class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
									Connect
								</button>
								<button class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
									Message
								</button>
							</div>
						</div>

						<div class="mt-20 text-center border-b pb-12">
							<h1 class="text-4xl font-medium text-gray-700">
								{hotelInfo?.NameOfProperty}{' '}
								<span className="text-blue-500">
									<EditIcon />
								</span>
							</h1>
							<p class="font-light text-gray-600 mt-3">
								{hotelInfo?.StreetAddress}, {hotelInfo?.City},{' '}
								{hotelInfo?.Country}{' '}
								<span className="text-blue-500 cursor-pointer">
									<EditIcon fontSize="small" />
								</span>
							</p>
							<StarCounting
								length={hotelInfo?.Stars}
								style={{ color: '#FDCC0D' }}
							/>

							<p class="mt-2 text-gray-500">University of Computer Science</p>
						</div>

						<div class="mt-12 flex flex-col justify-center">
							{!overViewEdit && (
								<p class="mt-8 text-gray-500 text-center">
									{hotelInfo?.overView}
									{
										<span
											onClick={handleOverViewToggle}
											className="text-blue-500  cursor-pointer"
										>
											{!hotelInfo?.overView && 'Add overview'}
											<EditIcon fontSize="small" />
										</span>
									}
								</p>
							)}
							{hotelInfo?.overView && (
								<button class="text-indigo-500 py-2 px-4  font-medium mt-4">
									Show more
								</button>
							)}

							{overViewEdit && (
								<>
									<form action="" onSubmit={handleUpdate}>
										<label
											for="message"
											class="block mb-2 text-sm font-medium text-gray-900 "
										>
											Your Description
										</label>
										<textarea
											defaultValue={overView}
											id="message"
											rows="4"
											class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
											placeholder="Write your thoughts here..."
											onChange={(e) => setOverView(e.target.value)}
										></textarea>
										<div className="d-flex justify-content-end mt-2">
											<button
												onClick={() => setOverViewEdit(false)}
												class="text-white py-2 mx-2 px-4 uppercase rounded bg-red-400 hover:bg-red-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
											>
												Cancel
											</button>
											<button
												type="submit"
												class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
											>
												Submit
											</button>
										</div>
									</form>
								</>
							)}

							<div className="row">
								<div className="col-md-4">
									{' '}
									<form action="" className="d-flex">
										<div>
											<label
												for="countries"
												class="block mb-2 text-sm font-medium text-gray-900"
											>
												check in Time
											</label>
											<select
												id="countries"
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
											>
												<option selected>Choose a country</option>
												<option value="US">United States</option>
												<option value="CA">Canada</option>
												<option value="FR">France</option>
												<option value="DE">Germany</option>
											</select>
										</div>
										<div className="ml-2">
											<label
												for="countries"
												class="block mb-2 text-sm font-medium text-gray-900"
											>
												check Out Time
											</label>
											<select
												id="countries"
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
											>
												<option selected>Choose a country</option>
												<option value="US">United States</option>
												<option value="CA">Canada</option>
												<option value="FR">France</option>
												<option value="DE">Germany</option>
											</select>
										</div>
									</form>
								</div>
								<div className="col-md-4"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
