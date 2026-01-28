import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkle, Sparkles } from "lucide-react";

export function Cta() {
    return (
        <section id="cta" className="py-24 bg-gradient-to-br from-purple-800/5 to-purple-600/5">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            Ready to Ace <br /> Your next Interview?
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Join hundreds of students who have already
                            transformed their interview performance.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="group cursor-pointer"
                            variant="secondary"
                        >
                            <Sparkles className="group-hover:rotate-12 transition-transform " />
                            Start Free Trial
                            <ArrowRight className="group-hover:translate-x-1 transition-transform " />
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                                10K+
                            </div>
                            <div className="text-slate-200">
                                Developers Trained
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                                94%
                            </div>
                            <div className="text-slate-200">Success Rate</div>
                        </div>{" "}
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                                500+
                            </div>
                            <div className="text-slate-200">
                                Companies Hiring
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
