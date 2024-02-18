import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import ModelContainer from "../Components/ModelContainer";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
	const [isEmpty, setIsEmpty] = useState(true);
	const [Data, setData] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		const init = async () => {
			const data = JSON.parse(localStorage.getItem("favoriteModel"));
			if (data == null || data.length === 0) {
				setIsEmpty(true);
			} else {
				const response = await fetch(
					process.env.REACT_APP_API_URL + "/api/favoriteModel",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(data),
					}
				);
				setData(await response.json());
				setIsEmpty(false);
			}
		};
		init();
	}, []);

	return (
		<>
			<Navbar />
			{isEmpty ? (
				<div className="flex w-full h-[90vh] items-center justify-center px-2 md:px-0">
					<div className="bg-[#c6cebe] p-8 rounded-xl border border-black">
						<h1 className="mt-3 text-2xl font-semibold text-[#fadc9c] md:text-3xl font-serif">
                        You haven't marked any models as favorites.
						</h1>
						<p className="mt-4 text-[#5c343c]">
                        Discover the highest-rated model now!
						</p>
						<div className="mt-6 flex items-center space-x-3">
							<button
								type="button"
								onClick={() => {
									navigate("/Top-Model");
								}}
								className="rounded-md bg-[#77acc7] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0063b2]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
							>
								Check Out
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-6 ml-8">
					{Data.map(
						({
							id,
							name,
							description,
							category,
							likes,
							imageURL,
						}) => (
							<ModelContainer
								key={id}
								modelId={id}
								modelName={name}
								modelDescription={description}
								modelTag={category}
								modelLikes={likes}
								modelURL={imageURL}
							/>
						)
					)}
				</div>
			)}
		</>
	);
};

export default Favorite;