"use client";

function ChildComponent({ isOn }: { isOn: boolean }) {
	console.log("render child");

	return (
		<div className="bg-blue-400 rounded-xl p-4 text-white">
			child is {isOn ? "on" : "off"}
		</div>
	);
}

export function ComponentWithChildren() {
	console.log("render");

	return (
		<div className="bg-slate-400 rounded-xl p-4 text-white">
			parent
			<ChildComponent isOn />
		</div>
	);
}
