import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const Sphere = () => {
	const tagCloudOptions = (w) => ({
		radius: Math.min(w.innerWidth, w.innerHeight) / 2,
		maxSpeed: "fast",
	});

	const handleClick = (tag, ev) => {
		alert(tag);
	};

	return (
		<div className="Sphere hidden md:block">
			<TagCloud
				options={tagCloudOptions}
				onClick={handleClick}
				onClickOptions={{ passive: true }}
				style={{
					fontWeight: "bold",
					color: "#ff5837",
					fontFamily: "Helvetica, sans-serif",
					textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)", // Adding text shadow for better visibility
				}}
			>
				{[
					"ResNeXt",
					"Bertweet",
					"KNN",
					"Decision Tree",
					"GPT-4",
					"T5 ",
					"ERNIE2.0",
					"OpenAI Codex",
					"DeBERTa",
					"UniLM",
					"CLIP",
					"DALL-E",
					"BigGAN",
					"WaveGlow",
					"YOLOv5",
					"Wave-U-Net",
					"DGC-Net",
					"DensePose",
					"StarGAN",
					"FastSpeech",
				]}
			</TagCloud>
		</div>
	);
};

export default Sphere;