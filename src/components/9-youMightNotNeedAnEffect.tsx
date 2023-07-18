"use client";

import { useEffect, useState } from "react";

function ChildComponent({ text }: { text: string }) {
	console.log("render child");

	const [isOn, setIsOn] = useState(true);
	const [customText, setCustomText] = useState("");

	// Don't do this
	useEffect(() => {
		setCustomText(isOn ? `Youpi ! ${text} is on !` : `ohhhh :(`);
	}, [isOn, text]);

	// Do that
	// const customText  = isOn ? `Youpi ! ${text} is on !` : `ohhhh :(`;

	return (
		<div
			className="bg-blue-400 rounded-xl p-4 text-white cursor-pointer"
			onClick={() => setIsOn(!isOn)}
		>
			{customText}
		</div>
	);
}

export function YouMightNotNeedAnEffect() {
	console.log("render");

	return (
		<div className="bg-slate-400 rounded-xl p-4 text-white">
			parent
			<ChildComponent text="Party" />
		</div>
	);
}
