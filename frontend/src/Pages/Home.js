import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Sphere from "../Components/Sphere";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const [numberOfModels, setNumberOfModels] = useState(0);
	useEffect(() => {
		const init = async () => {
			const response = await fetch(
				process.env.REACT_APP_API_URL + "/api/numberOfModels"
			);
			setNumberOfModels(await response.json());
		};
		init();
	}, []);

	return (
<div className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 m-0 p-0">
			<Navbar />
			<div className="flex flex-wrap justify-center items-center">
				<Sphere />
				<h4 className="text-3xl  home-bottom-text text-[#ffcebe] font-[Helvetica,sans-serif]">
					<div className="circle-word-container">
						<span className="circle-word-long font-[Helvetica,sans-serif]">
							{numberOfModels} AI Models
						</span>
					</div>
					Embark on a journey to delve into the world of AI models!
					<div className="home-bottom-buttons"></div>
				</h4>
			</div>
			<div className="mx-auto max-w-7xl px-2 pb-4 lg:px-8 ">
				<div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
					<div className="font-[Helvetica,sans-serif]">
						<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full  bg-pink-100">
							<svg
								className="h-9 w-9 text-pink-600 bg-transparent"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
								/>
							</svg>
						</div>
						<h3 className="mt-8 text-lg font-semibold text-[#eff156] font-color">
							Revolutionize with AI
						</h3>
						<p className="mt-4 text-sm text-[#e5f1f6]">
						Every model is accompanied by a comprehensive description, code snippets, and information about the provider, giving you the tools to seamlessly incorporate AI into your projects.
						</p>
					</div>
					<div className="font-[Outfit,sans-serif]">
						<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-100">
							<svg
								className="h-9 w-9 text-violet-600 bg-transparent"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
						<h3 className="mt-8 text-lg font-semibold text-[#eff156]">
							Top Models Exhibit
						</h3>
						<p className="mt-4 text-sm text-[#e5f1f6]">
						Immerse yourself in our array of state-of-the-art AI models, highlighting the most recent breakthroughs spanning various categories and industries.
						</p>
					</div>
					<div className="font-[Helvetica,sans-serif]">
						<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
							<svg
								className="h-9 w-9 text-purple-600 bg-transparent"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								/>
							</svg>
						</div>
						<h3 className="mt-8 text-lg font-semibold text-[#eff156]">
							Submit Your Model
						</h3>
						<p className="mt-4 text-sm text-[#e5f1f6]">
						Explore our selection of cutting-edge AI models, featuring the latest advancements across diverse categories and industries.
						</p>
					</div>
					<div className="font-[Helvetica,sans-serif]">
						<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
							<svg
								className="h-9 w-9 text-blue-600 bg-transparent"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
								/>
							</svg>
						</div>
						<h3 className="mt-8 text-lg font-semibold text-[#eff156]">
							Explore Models
						</h3>
						<p className="mt-4 text-sm text-[#e5f1f6]">
						Delve into our assortment of advanced AI models, showcasing the latest breakthroughs across a range of categories and industries.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
