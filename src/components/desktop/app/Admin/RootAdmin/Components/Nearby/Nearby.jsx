import { baseUrl } from '@/src/config/serverConfig';
import { UserContent } from '@/src/store/AuthContent';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Button } from '@mui/material';
import { useContext, useState } from 'react';
const Nearby = ({ hotelInfo }) => {
	const [resturantName, setResturantName] = useState('');
	const [resturantDistance, setResturantDistance] = useState('');
	const [cafeName, setCafeName] = useState('');
	const [cafeDistance, setCafeDistance] = useState('');
	const [superMarketName, setSuperMarketName] = useState('');
	const [superMarketDistance, setSuperMarketDistance] = useState('');
	const [marketName, setMarketName] = useState('');
	const [marketDistance, setMarketDistance] = useState('');
	const [mountainName, setMountainName] = useState('');
	const [mountainDistance, setMountainDistance] = useState('');
	const [lakeName, setLakeName] = useState('');
	const [lakeDistance, setLakeDistance] = useState('');
	const [riverName, setRiverName] = useState('');
	const [riverDistance, setRiverDistance] = useState('');
	const [seaName, setSeaName] = useState('');
	const [seaDistance, setSeaDistance] = useState('');
	const [beachName, setBeachName] = useState('');
	const [beachDistance, setBeachDistance] = useState('');
	const { userInfo } = useContext(UserContent);

	const data = {
		resturent: { name: resturantName, distance: resturantDistance },
		cafe: { name: cafeName, distance: cafeDistance },
		supperMarket: { name: superMarketName, distance: superMarketDistance },
	};

	const handelUpdate = async () => {
		await fetch(`${baseUrl}/hotelUpdate/${userInfo.user_id}/${hotelInfo._id}`, {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	console.log({
		resturantName,
		resturantDistance,
		cafeName,
		cafeDistance,
		superMarketName,
		superMarketDistance,
		marketName,
		marketDistance,
		mountainName,
		mountainDistance,
		lakeName,
		lakeDistance,
		riverName,
		riverDistance,
		seaName,
		seaDistance,
		beachName,
		beachDistance,
	});
	return (
		<>
			<div className="mb-8">
				<h1 className="text-5xl font-bold">What's Nearby?</h1>
			</div>
			<div>
				<h2 className="text-3xl font-bold mb-2">Shopping and dining</h2>
			</div>
			<div className="grid grid-cols-12 justify-between  gap-3 mb-3">
				<div className="col-span-7">
					<div className="border rounded ">
						<div className=" p-2">
							<h3 className="text-2xl font-bold mt-2 ">Resturent:</h3>
							<div className="pr-2 pl-4">
								<div className="flex justify-between  gap-1 ">
									<div>
										<h1>Name</h1>
										<input
											type="text"
											placeholder="Type here"
											className="input w-full max-w-xs border h-8 p-3 rounded"
											onChange={(e) => setResturantName(e.target.value)}
										/>
									</div>
									<div className="flex ">
										<div>
											<h1>Distance</h1>
											<div className="flex border rounded">
												<input
													type="text"
													placeholder="Type here"
													className="input w-full max-w-xs p-3 rounded border h-8"
													onChange={(e) => setResturantDistance(e.target.value)}
												/>

												<div>
													<select
														className="select"
														onClick={(e) =>
															setResturantDistance(e.target.value)
														}
													>
														<option disabled selected>
															metres
														</option>
														<option>50</option>
														<option>60</option>
														<option>70</option>
														<option>80</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<button className="btn btn-active btn-ghost">Clear</button>
								</div>
								<button className="mt-2 text-blue-600">
									<ControlPointIcon /> Add Another
								</button>
							</div>
						</div>
						<div className=" p-2">
							<h3 className="text-2xl font-bold mt-2 ">Cafe/bar:</h3>
							<div className="pr-2 pl-4">
								<div className="flex justify-between  gap-1 ">
									<div>
										<h1>Name</h1>
										<input
											type="text"
											placeholder="Type here"
											className="input w-full max-w-xs border h-8 p-3  rounded"
											onChange={(e) => setCafeName(e.target.value)}
										/>
									</div>
									<div className="flex ">
										<div>
											<h1>Distance</h1>
											<div className="flex border rounded">
												<input
													type="text"
													placeholder="Type here"
													className="input w-full max-w-xs p-3 rounded border h-8"
													onChange={(e) => setCafeDistance(e.target.value)}
												/>

												<div>
													<select
														className="select"
														onClick={(e) => setCafeDistance(e.target.value)}
													>
														<option disabled selected>
															metres
														</option>
														<option>50</option>
														<option>60</option>
														<option>70</option>
														<option>80</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<button className="btn btn-active btn-ghost">Clear</button>
								</div>
								<button className="mt-2 text-blue-600">
									<ControlPointIcon /> Add Another
								</button>
								<hr className="mt-2 mb-2" />
							</div>
						</div>
						<div className=" p-2">
							<h3 className="text-2xl font-bold mt-2 ">
								Grocery store/supermarket:
							</h3>
							<div className="pr-2 pl-4">
								<div className="flex justify-between  gap-1 ">
									<div>
										<h1>Name</h1>
										<input
											type="text"
											placeholder="Type here"
											className="input w-full max-w-xs border h-8 rounded p-3 "
											onChange={(e) => setSuperMarketName(e.target.value)}
										/>
									</div>
									<div className="flex ">
										<div>
											<h1>Distance</h1>
											<div className="flex border rounded">
												<input
													type="text"
													placeholder="Type here"
													className="input w-full max-w-xs rounded border h-8 p-3 "
													onChange={(e) =>
														setSuperMarketDistance(e.target.value)
													}
												/>

												<div>
													<select
														className="select"
														onClick={(e) =>
															setSuperMarketDistance(e.target.value)
														}
													>
														<option disabled selected>
															metres
														</option>
														<option>50</option>
														<option>60</option>
														<option>70</option>
														<option>80</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<button className="btn btn-active btn-ghost">Clear</button>
								</div>
								<button className="mt-2 text-blue-600">
									<ControlPointIcon /> Add Another
								</button>
							</div>
						</div>
						<div className=" p-2">
							<h3 className="text-2xl font-bold mt-2 ">Market:</h3>
							<div className="pr-2 pl-4">
								<div className="flex justify-between  gap-1 ">
									<div>
										<h1>Name</h1>
										<input
											type="text"
											placeholder="Type here"
											className="input w-full max-w-xs border h-8 rounded p-3 "
											onChange={(e) => setMarketName(e.target.value)}
										/>
									</div>
									<div className="flex ">
										<div>
											<h1>Distance</h1>
											<div className="flex border rounded">
												<input
													type="text"
													placeholder="Type here"
													className="input w-full max-w-xs rounded border h-8 p-3 "
													onChange={(e) => setMarketDistance(e.target.value)}
												/>

												<div>
													<select
														className="select"
														onChange={(e) => setMarketDistance(e.target.value)}
													>
														<option disabled selected>
															metres
														</option>
														<option>50</option>
														<option>60</option>
														<option>70</option>
														<option>80</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<button className="btn btn-active btn-ghost">Clear</button>
								</div>
								<button className="mt-2 text-blue-600">
									<ControlPointIcon /> Add Another
								</button>
								<hr className="mt-2 mb-2" />
							</div>
						</div>
					</div>
					<div className="mt-2">
						<h1 className="text-3xl font-bold mb-2">Place of Interest</h1>
					</div>
					<div className="border rounded ">
						<div className=" p-2">
							<h3 className="text-2xl font-bold  mt-2">Mountain:</h3>
							<div className="pr-2 pl-4">
								<div className="flex justify-between  gap-1 ">
									<div>
										<h1>Name</h1>
										<input
											type="text"
											placeholder="Type here"
											className="input w-full max-w-xs border h-8 rounded p-3 "
											onChange={(e) => setMarketName(e.target.value)}
										/>
									</div>
									<div className="flex ">
										<div>
											<h1>Distance</h1>
											<div className="flex border rounded">
												<input
													type="text"
													placeholder="Type here"
													className="input w-full max-w-xs rounded border h-8 p-3 "
													onChange={(e) => setMountainDistance(e.target.value)}
												/>

												<div>
													<select
														className="select"
														onClick={(e) => setMountainDistance(e.target.value)}
													>
														<option disabled selected>
															Unit
														</option>
														<option>50</option>
														<option>60</option>
														<option>70</option>
														<option>80</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<button className="btn btn-active btn-ghost">Clear</button>
								</div>
								<button className="mt-2 text-blue-600">
									<ControlPointIcon /> Add Another
								</button>
							</div>
						</div>
						<div className=" p-2">
							<h3 className="text-2xl font-bold mt-2 ">Lake:</h3>
							<div className="pr-2 pl-4">
								<div className="flex justify-between  gap-1 ">
									<div>
										<h1>Name</h1>
										<input
											type="text"
											placeholder="Type here"
											className="input w-full max-w-xs border p-3 h-8 rounded"
											onChange={(e) => setLakeName(e.target.value)}
										/>
									</div>
									<div className="flex ">
										<div>
											<h1>Distance</h1>
											<div className="flex border rounded">
												<input
													type="text"
													placeholder="Type here"
													className="input w-full max-w-xs rounded border p-3 h-8"
													onChange={(e) => setLakeDistance(e.target.value)}
												/>

												<div>
													<select
														className="select"
														onClick={(e) => setLakeDistance(e.target.value)}
													>
														<option disabled selected>
															Lake
														</option>
														<option>50</option>
														<option>60</option>
														<option>70</option>
														<option>80</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<button className="btn btn-active btn-ghost">Clear</button>
								</div>
								<button className="mt-2 text-blue-600">
									<ControlPointIcon /> Add Another
								</button>
								<hr className="mt-2 mb-2" />
							</div>
						</div>
						<div className=" p-2">
							<h3 className="text-2xl font-bold mt-2 ">River:</h3>
							<div className="pr-2 pl-4">
								<div className="flex justify-between  gap-1 ">
									<div>
										<h1>Name</h1>
										<input
											type="text"
											placeholder="Type here"
											className="p-3 input w-full max-w-xs border h-8 rounded"
											onChange={(e) => setRiverName(e.target.value)}
										/>
									</div>
									<div className="flex ">
										<div>
											<h1>Distance</h1>
											<div className="flex border rounded">
												<input
													type="text"
													placeholder="Type here"
													className="p-3 input w-full max-w-xs rounded border h-8"
													onChange={(e) => setRiverDistance(e.target.value)}
												/>

												<div>
													<select
														className="select"
														onClick={(e) => setRiverDistance(e.target.value)}
													>
														<option disabled selected>
															Unit
														</option>
														<option>50</option>
														<option>60</option>
														<option>70</option>
														<option>80</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<button className="btn btn-active btn-ghost">Clear</button>
								</div>
								<button className="mt-2 text-blue-600">
									<ControlPointIcon /> Add Another
								</button>
							</div>
						</div>
						<div className=" p-2">
							<h3 className="text-2xl font-bold mt-2 ">Sea/Ocean:</h3>
							<div className="pr-2 pl-4">
								<div className="flex justify-between  gap-1 ">
									<div>
										<h1>Name</h1>
										<input
											type="text"
											placeholder="Type here"
											className="p-3 input w-full max-w-xs border h-8 rounded"
											onChange={(e) => setSeaName(e.target.value)}
										/>
									</div>
									<div className="flex ">
										<div>
											<h1>Distance</h1>
											<div className="flex border rounded">
												<input
													type="text"
													placeholder="Type here"
													className="p-3 input w-full max-w-xs rounded border h-8"
													onChange={(e) => setSeaDistance(e.target.value)}
												/>

												<div>
													<select
														className="select"
														onClick={(e) => setSeaDistance(e.target.value)}
													>
														<option disabled selected>
															metres
														</option>
														<option>50</option>
														<option>60</option>
														<option>70</option>
														<option>80</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<button className="btn btn-active btn-ghost">Clear</button>
								</div>
								<button className="mt-2 text-blue-600">
									<ControlPointIcon /> Add Another
								</button>
								<hr className="mt-2 mb-2" />
							</div>
						</div>
						<div className=" p-2">
							<h3 className="text-2xl font-bold mt-2 ">Beach:</h3>
							<div className="pr-2 pl-4">
								<div className="flex justify-between  gap-1 ">
									<div>
										<h1>Name</h1>
										<input
											type="text"
											placeholder="Type here"
											className="p-3 input w-full max-w-xs border h-8 rounded"
											onChange={(e) => setBeachName(e.target.value)}
										/>
									</div>
									<div className="flex ">
										<div>
											<h1>Distance</h1>
											<div className="flex border rounded">
												<input
													type="text"
													placeholder="Type here"
													className="p-3 input w-full max-w-xs rounded border h-8"
													onChange={(e) => setBeachDistance(e.target.value)}
												/>

												<div>
													<select
														className="select"
														onClick={(e) => setBeachDistance(e.target.value)}
													>
														<option disabled selected>
															metres
														</option>
														<option>50</option>
														<option>60</option>
														<option>70</option>
														<option>80</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<button className="btn btn-active btn-ghost">Clear</button>
								</div>
								<button className="mt-2 text-blue-600">
									<ControlPointIcon /> Add Another
								</button>
								<hr className="mt-2 mb-2" />
							</div>
						</div>

						<div className="flex justify-end mr-3 mb-3">
							<Button
								onClick={handelUpdate}
								variant="contained"
								className="custom_green_color"
							>
								UPDATE
							</Button>
						</div>
					</div>
				</div>
				<div className=" col-span-5 ">
					<h3 className="text-4xl font-bold">Tell us what's nearby</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi
						deserunt, eligendi perspiciatis natus facere soluta, praesentium
						dolores reiciendis esse hic tenetur quasi cupiditate! Alias nemo
						quaerat possimus quo velit?
					</p>
				</div>
			</div>
		</>
	);
};
export default Nearby;
