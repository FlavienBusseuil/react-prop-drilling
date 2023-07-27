import { useEffect, useMemo, useState } from "react";

// hooks may have arguments
type Args = {
	initialValue: number;
};

// convention: start with 'use'
function useCustomHook({ initialValue }: Args) {
	// hooks call at least one other hook (useState, useContext, useEffect, ...)
	const [value, setValue] = useState(Math.round(initialValue));

	const isEvenValue = value % 2 === 0;

	useEffect(() => {
		console.log(`Value is now ${isEvenValue ? "even" : "odd"}`);
	}, [isEvenValue]);

	const handleSetValue = (value: number) => setValue(Math.round(value));

	// hooks may return data
	return {
		value,
		setValue: handleSetValue,
		isEvenValue,
	};
}

export function ComponentWithCustomHook() {
	const { value, setValue, isEvenValue } = useCustomHook({ initialValue: 0 });
	const handleClick = () => setValue(Math.random() * 1000);

	return (
		<div
			className={`p-3 rounded-xl cursor-pointer ${
				isEvenValue ? "bg-blue-300" : "bg-red-300"
			}`}
			onClick={handleClick}
		>
			{value}
		</div>
	);
}
