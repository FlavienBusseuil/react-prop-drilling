"use client";

type B1 = { prop1: string };
function ComponentB1({ prop1 }: B1) {
	return <>{prop1}</>;
}

type B2 = { prop2: string };
function ComponentB2({ prop2 }: B2) {
	return <>{prop2}</>;
}

type B = B1 & B2;
function ComponentB({ prop1, prop2 }: B) {
	return (
		<>
			<ComponentB1 prop1={prop1} />
			<ComponentB2 prop2={prop2} />
		</>
	);
}

type C = { prop3: string };
function ComponentC({ prop3 }: C) {
	return <>{prop3}</>;
}

type A = B & C;
function ComponentA({ prop1, prop2, ...otherProps }: A) {
	return (
		<>
			<ComponentB {...{ prop1, prop2 }} />
			<ComponentC {...otherProps} />
		</>
	);
}

export function PureFonctionalComponent(props: A) {
	return <ComponentA {...props} />;
}
