"use client";

import { PureFonctionalComponent } from "@/components/1-pure-fionctional-component";
import { ComponentWithContext } from "@/components/2-use-context";
import { ComponentWithCustomContext } from "@/components/3-custom-context-hook";
import { ComponentWithCustomHook } from "@/components/4-custom-hook";

export default function Home() {
	return (
		<main className="flex min-h-screen gap-2 items-center p-24 text-3xl">
			<PureFonctionalComponent prop1="1" prop2="2" prop3="3" />
			{/* <ComponentWithContext prop1="1" prop2="2" prop3="3" /> */}
			{/* <ComponentWithCustomContext prop1="1" prop2="2" prop3="3" /> */}
			{/* <ComponentWithCustomHook /> */}
		</main>
	);
}
