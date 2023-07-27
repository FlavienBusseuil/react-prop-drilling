"use client";
import { createContext, PropsWithChildren, useContext } from "react";
import { A } from "./3-custom-context-hook";

// And now move this to a new file... 🧙‍♂️✨
const context = createContext<A | null>(null);
export function MyProvider({ children, ...props }: PropsWithChildren<A>) {
	return <context.Provider value={props}>{children}</context.Provider>;
}
export function useMyContext() {
	const props = useContext(context);
	if (props === null) {
		throw new Error("No context provided !");
	}
	return props;
}
