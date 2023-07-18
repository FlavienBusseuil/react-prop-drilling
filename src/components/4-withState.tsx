"use client";

import { useState } from "react";

function ChildComponent() {
	console.log("render child");
	const [isOn, setIsOn] = useState(true);

	return (
		<div
			className="bg-blue-400 rounded-xl p-4 text-white cursor-pointer"
			onClick={() => setIsOn(!isOn)}
		>
			child is {isOn ? "on" : "off"}
		</div>
	);
}

export function ComponentWithState() {
	console.log("render");

	return (
		<div className="bg-slate-400 rounded-xl p-4 text-white">
			parent
			<ChildComponent />
		</div>
	);
}
