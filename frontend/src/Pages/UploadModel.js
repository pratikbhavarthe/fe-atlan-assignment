import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const UploadModel = () => {
	const navigate = useNavigate();
	const imageArray = [
		"https://unsplash.com/photos/a-computer-generated-image-of-the-letter-a-ZPOoDQc8yMw",
		"https://unsplash.com/photos/an-abstract-image-of-a-sphere-with-dots-and-lines-nGoCBxiaRO0",
		"https://unsplash.com/photos/a-purple-and-green-background-with-intertwined-circles-nYSdjVD2ayo",
		"https://unsplash.com/photos/a-computer-chip-in-the-shape-of-a-human-head-gakXaqzGad0",
		"https://unsplash.com/photos/two-hands-touching-each-other-in-front-of-a-pink-background-gVQLAbGVB6Q",
		"https://unsplash.com/photos/a-computer-generated-image-of-a-network-and-a-laptop-f0JGorLOkw0",
		"https://unsplash.com/photos/a-bunch-of-water-drops-LIlsk-UFVxk",
		"https://unsplash.com/photos/background-pattern-LaKwLAmcnBc",
		"https://unsplash.com/photos/a-drawing-of-a-colorful-octopus-6Y4EzfSP5Tc",
	];
	const randomNumber = Math.floor(Math.random() * 9);
	const randomId = Math.floor(Math.random() * 1e10) + 150;
	const [formData, setFormData] = useState({
		id: randomId,
		name: "",
		category: "",
		description: "",
		provider: "",
		codeSnippet: "",
		likes: 0,
		imageURL: imageArray[randomNumber],
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const init = async () => {
		const response = await fetch(
			process.env.REACT_APP_API_URL + "/api/uploadModel",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			}
		);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			formData.name.trim() === "" ||
			formData.category.trim() === "" ||
			formData.description.trim() === "" ||
			formData.provider.trim() === "" ||
			formData.codeSnippet.trim() === ""
		) {
			toast.error("Please fill in all fields");
			return;
		}
		init();
		toast.success("Model Added");
		setTimeout(() => {
			navigate(`/Models/${formData.id}`);
		}, 1000);
	};

	return (
		<>
			<Navbar />
			<div className="bg-[#303030] min-h-screen h-screen w-full">
				<form
					onSubmit={handleSubmit}
					className="max-w-md mx-auto bg-white p-8 rounded shadow-md font-serif"
				>
					<h2 className="text-2xl font-semibold mb-4">
						Submit Your Model
					</h2>

					<div className="mb-4">
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-600"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="mt-1 p-2 w-full border border-black rounded-md"
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="source"
							className="block text-sm font-medium text-gray-600"
						>
							Source
						</label>
						<input
							type="text"
							id="source"
							name="source"
							value={formData.source}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md border-black "
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="category"
							className="block text-sm font-medium text-gray-600"
						>
							Category
						</label>
						<select
							id="category"
							name="category"
							value={formData.category}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md border-black "
						>
							<option value="">Select a category</option>
							<option value="Visual Storytelling">
								Visual Storytelling
							</option>
							<option value="Text and Image Fusion">Text and Image Fusion</option>
							<option value="Image-Based Localization">Image-Based Localization</option>
							<option value="Text and Image Fusion">
								Text and Image Fusion
							</option>
							<option value="Facial Recognition">
								Facial Recognition
							</option>
							<option value="Video Tracking">
								Video Tracking
							</option>
							<option value="Anomaly Detection">
								Anomaly Detection
							</option>
							<option value="Image Registration">
								Image Registration
							</option>
							<option value="Text Generation">
								Text Generation
							</option>
							<option value="Topic Modeling">
								Topic Modeling
							</option>
							<option value="Document Classification">Document Classification</option>
							<option value="Named Entity Recognition">Named Entity Recognition</option>
							{/* Include additional choices as required.*/}
						</select>
					</div>

					<div className="mb-4">
						<label
							htmlFor="description"
							className="block text-sm font-medium text-gray-600"
						>
							Description
						</label>
						<textarea
							id="description"
							name="description"
							value={formData.description}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md border-black "
							rows="4"
						></textarea>
					</div>

					<div className="mb-4">
						<label
							htmlFor="codeSnippet"
							className="block text-sm font-medium text-gray-600"
						>
							Code Snippet
						</label>
						<textarea
							id="codeSnippet"
							name="codeSnippet"
							value={formData.codeSnippet}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md border-black "
							rows="2"
						></textarea>
					</div>

					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
					>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default UploadModel;
