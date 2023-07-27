"use client";

import { createContext, PropsWithChildren, useContext } from "react";

const context = createContext<A | null>(null);
function MyProvider({ children, ...props }: PropsWithChildren<A>) {
	return <context.Provider value={props}>{children}</context.Provider>;
}

type B1 = { prop1: string };
function ComponentB1() {
	const props = useContext(context);
	if (props === null) {
		throw new Error("No context provided !");
	}

	const { prop1 } = props;
	return <>{prop1}</>;
}

type B2 = { prop2: string };
function ComponentB2() {
	const props = useContext(context);
	if (props === null) {
		throw new Error("No context provided !");
	}

	const { prop2 } = props;
	return <>{prop2}</>;
}

type B = B1 & B2;
function ComponentB() {
	return (
		<>
			<ComponentB1 />
			<ComponentB2 />
		</>
	);
}

type C = { prop3: string };
function ComponentC() {
	const props = useContext(context);
	if (props === null) {
		throw new Error("No context provided !");
	}

	const { prop3 } = props;
	return <>{prop3}</>;
}

type A = B & C;
function ComponentA() {
	return (
		<>
			<ComponentB />
			<ComponentC />
		</>
	);
}

export function ComponentWithContext(props: A) {
	return (
		<MyProvider {...props}>
			<ComponentA />
		</MyProvider>
	);
}
