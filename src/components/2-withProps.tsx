"use client";

export function ComponentWithProps({ isOn }: { isOn: boolean }) {
	console.log("render");

	return (
		<div className="bg-slate-400 rounded-xl p-4 text-white">
			{isOn ? "on" : "off"}
		</div>
	);
}
