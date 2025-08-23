"use client";
import { TypeAnimation } from "react-type-animation";

import { Sparkle } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroBlock = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <div className="container mx-auto px-4 py-20">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-center flex gap-2 flex-col items-center">
                    Practice real interviews
                    <span className="inline-block bg-indigo-500 text-white shadow-[0_0_20px_#6366f1] px-6 py-2 rounded-xl">
                        <TypeAnimation
                            sequence={[
                                1000,
                                "Frontend 😎",
                                1000,
                                "Backend 🧐",
                                1000,
                                "Fullstack  🚀",
                                1000,
                                "DevOps  🛠️",
                                1000,
                                "Data  📊",
                                1000,
                                "Mobile  📱",
                            ]}
                            wrapper="span"
                            speed={70}
                            className="texx-5xl md:text-6xl font-extrabold tracking-tight text-center inline-block"
                            repeat={Infinity}
                        />
                    </span>
                </h1>
                <p className="text-indigo-100 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed text-center">
                    Prepare for your next tech interview with TechView. Practice
                    coding problems, system design, and behavioral questions
                    with real-time feedback and personalized recommendations.
                </p>

                <div className="flex items-center justify-center pb-5">
                    <Button
                        className="bg-indigo-600 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform-gpu hover:scale-[1.03] active:scale-[0.97] flex items-center gap-2 group cursor-pointer"
                     
                    >
                        <Link href="/dashboard" />
                        <Sparkle className="group-hover:rotate-12 transition-transform " />
                        Get Started
                    </Button>
                </div>

                <div className="flex items-center gap-8 text-sm text-slate-200 justify-center">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        5+ interviews types
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        No credit card required
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        Instant Feedback
                    </div>
                </div>
            </div>
        </section>
    );
};
