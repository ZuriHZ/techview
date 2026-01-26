import Link from "next/link";
import { pricingPlans } from "./Pricing.data";

import { Button } from "@/components/ui/button";
import { Check, Sparkle } from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
export function Pricing() {
    return (
        <section
            className="py-24 bg-gradient-to-b from-purple-700/10 to-purple-900"
            id="pricing"
        >
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl  font-extrabold mb-4">
                        Choose yor plan
                    </h2>
                    <p className="text-xl text-slate-200 max-w-2xl mx-auto">
                        start free , upgrade when you are ready to ace every
                        interview
                    </p>
                </div>
                <div className="grid md:grid-cols-2 mx-auto max-w-6xl gap-8">
                    {pricingPlans.map((plan, index) => (
                        <Card
                            className={`relative group hover:shadow-xl transition-all duration-300 border-0 px-2 py-6  ${plan.popular ? "rounded-md border bg-purple-900/70 border-purple-400/30 text-purple-200" : "p-2 rounded-md border bg-purple-600/20 border-purple-400/30 text-purple-200"}`}
                            key={index}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 ">
                                    <span className="bg-white text-purple-800 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
                                        <Sparkle className="w-4 h-4" />
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            <CardHeader className="text-center pb-4">
                                <CardTitle className="text-2xl font-bold text-white">
                                    {plan.name}
                                </CardTitle>
                                <div className="mt-4 ">
                                    <span className="text-4xl font-bold text-white">
                                        ${plan.price}
                                    </span>
                                    <span className="text-slate-200">
                                        /month
                                    </span>
                                </div>
                                <p className="text-slate-200 mt-2">
                                    {plan.description}
                                </p>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {plan.features.map(
                                        (feature, featureIndex) => (
                                            <li
                                                key={featureIndex}
                                                className="flex items-center gap-3"
                                            >
                                                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                                                <span className="text-sm text-slate-200">
                                                    {feature}
                                                </span>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </CardContent>
                            <CardFooter className="text-center">
                                <Button
                                    size="lg"
                                    className={`w-full font-semibold cursor-pointer ${plan.popular ? "bg-indigo-600 hover:bg-indigo-600/30 text-white shadow-md" : "bg-purple-700/30 hover:bg-purple-700/50 text-white border border-purple-400/20"}`}
                                >
                                    {plan.buttonText}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
