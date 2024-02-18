import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import ModelContainer from "../Components/ModelContainer";
import TagComponent from "../Components/TagComponent";

const Explore = () => {
    const [data, setData] = useState([]);
	const [scroll, setscroll] = useState(true);
	const [loadedItems, setLoadedItems] = useState(0);
	const containerRef = useRef(null);
    useEffect(() => {
        const getData = async () => {
            await loadMoreData();
        };
        getData();
    }, []);

    const searchModel = async (query) => {
        if(query.length > 2) {
            setscroll(false);
			const response = await fetch(
				process.env.REACT_APP_API_URL + `/api/models?search=${query}`
            );
            const result = await response.json();
			setData(result);
			setLoadedItems(0);
        } else if (query.length <= 2) {
            setscroll(true);
			const response = await fetch(
				process.env.REACT_APP_API_URL + `/api/models?search=${query}`
			);
			const result = await response.json();
			setData(result);
        }
    };

    const loadMoreData = async () => {
		const response = await fetch(
			process.env.REACT_APP_API_URL + `/api/models?offset=${loadedItems}`
		);
		const newData = await response.json();
		setData([...data, ...newData]);
		setLoadedItems(loadedItems + newData.length);
	};

	const handleScroll = () => {
		if (containerRef) {
			const { scrollTop, scrollHeight, clientHeight } =
				containerRef.current;
			if (scrollTop + clientHeight >= scrollHeight && scroll) {
				loadMoreData();
			}
		}
	};

	useEffect(() => {
		if (containerRef.current && scroll) {
			containerRef.current.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (containerRef.current) {
				containerRef.current.removeEventListener(
					"scroll",
					handleScroll
				);
			}
		};
	}, [containerRef, loadedItems, scroll]);

	const resetData = async () => {
		setLoadedItems(0);
		const response = await fetch(
			process.env.REACT_APP_API_URL + `/api/models?offset=${0}`
		);
		setData(await response.json());
		setLoadedItems(10);
		setscroll(true);
	};
	return (
		<>
			<Navbar />
			<div className="w-full m-0 p-0 flex flex-row overflow-hidden ">
            <div className="w-[27vw] h-[95vh] overflow-y-scroll bg-gradient-to-b from-[#d3e7ee] via-[#ecd59f] to-[#303030] pt-1 hidden md:block">
					<div className="flex justify-end pr-3">
						<button
							className="ml-2 flex h-7 items-center whitespace-nowrap rounded-full border bg-[#c0d8d7] px-3 text-sm text-[#003d31] decoration-gray-300 shadow-sm hover:bg-[#cfddbd] hover:text-[#f0ff3d] justify-end"
							type="button"
							onClick={resetData}
						>
							<svg
								className="mr-1.5 text-xs"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								role="img"
								width="2em"
								height="2em"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 -960 960 960"
							>
								<path
									d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"
									fill="currentColor"
								></path>
							</svg>
							Refresh Tasks
						</button>
					</div>
					<TagComponent
						TagTitle={"Polymodal"}
						TagList={[
							"Visual Storytelling",
							"Visual Question Generation",
							"Image-Based Localization",
							"Text and Image Fusion",
						]}
						setData={setData}
						setscroll={setscroll}
					/>
					<TagComponent
						TagTitle={"Visual Recognition"}
						TagList={[
							"Facial Recognition",
							"Video Tracking",
							"Anomaly Detection",
							"Image Registration",
						]}
						setData={setData}
						setscroll={setscroll}
					/>
					<TagComponent
						TagTitle={"NLP Algorithms"}
						TagList={[
							"Text Generation",
							"Named Entity Recognition",
							"Document Classification",
							"Topic Modeling",
						]}
						setData={setData}
						setscroll={setscroll}
					/>
				</div>
				<div
					className="flex flex-colw-screen md:w-[77vw] h-[90vh] overflow-y-scroll overflow-x-hidden"
					ref={containerRef}
				>
					<div className="flex flex-col items-center">
						<div className="w-full md:w-1/3 px-4 pt-2 flex justify-center">
							<input
								className="flex h-10 w-full rounded-full border border-[#122417] bg-[#dbedcc] px-4 text-sm placeholder:text-[#a38254] focus:outline-none focus:ring-2 focus:ring-[#ff5524] focus:border-transparent transition-all duration-300 ease-in-out"
								type="text"
								placeholder="Search an AI model"
								onChange={(e) => {
									searchModel(e.target.value);
								}}
							/>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 p-4">
							{data.map(
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
					</div>
				</div>
			</div>
		</>
	);
};

export default Explore;