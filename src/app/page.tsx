import { BasicComponent } from "@/components/1-basic";
import { ComponentWithProps } from "@/components/2-withProps";
import { ComponentWithChildren } from "@/components/3-withChildren";
import { ComponentWithState } from "@/components/4-withState";
import { ComponentWithUseEffect } from "@/components/5-withUseEffect";
import { ComponentWithUseEffectOnMount } from "@/components/6-withUseEffectOnMount";
import { ComponentWithUseEffectUnMount } from "@/components/7-withUseEffectUnMount";
import { ComponentWithUseEffectWithDependencies } from "@/components/8-withUseEffectWithDependencies";
import { YouMightNotNeedAnEffect } from "@/components/9-youMightNotNeedAnEffect";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24 text-3xl">
			<BasicComponent />
			{/* <ComponentWithProps isOn /> */}
			{/* <ComponentWithChildren /> */}
			{/* <ComponentWithState /> */}
			{/* <ComponentWithUseEffect /> */}
			{/* <ComponentWithUseEffectOnMount /> */}
			{/* <ComponentWithUseEffectUnMount /> */}
			{/* <ComponentWithUseEffectWithDependencies /> */}
			{/* <YouMightNotNeedAnEffect /> */}
		</main>
	);
}
