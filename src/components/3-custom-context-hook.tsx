"use client";

import { useMyContext, MyProvider } from "./useMyContext";

type B1 = { prop1: string };
function ComponentB1() {
	const { prop1 } = useMyContext();
	return <>{prop1}</>;
}

type B2 = { prop2: string };
function ComponentB2() {
	const { prop2 } = useMyContext();
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
	const { prop3 } = useMyContext();
	return <>{prop3}</>;
}

export type A = B & C;
function ComponentA() {
	return (
		<>
			<ComponentB />
			<ComponentC />
		</>
	);
}

export function ComponentWithCustomContext(props: A) {
	return (
		<MyProvider {...props}>
			<ComponentA />
		</MyProvider>
	);
}
