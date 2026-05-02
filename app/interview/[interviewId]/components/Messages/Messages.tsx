import { useEffect, useRef } from "react";
import { MessageProps } from "./Messages.types";

export function Messages(props: MessageProps) {
    const { message } = props;
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [message]);

    return (
        <div
            ref={scrollRef}
            className="overflow-y-auto scrollbar-none h-60 mt-4 max-w-3xl mx-auto w-full px-4 py-4 bg-white/20 backdrop-blur-md border border-gray-200 rounded-lg space-y-4 shadow-sm no-scrollbar"
        >
            <h2 className="text-xl font-semibold mt-8 mb-2 text-center">
                Transcription
            </h2>

            <div>
                {message.map((msg, key) => {
                    const isAssistant = msg.role === "assistant";
                    return (
                        <div
                            key={key}
                            className={`flex mb-2 ${isAssistant ? "justify-start" : "justify-end"}`}
                        >
                            <div
                                className={`max-w-[80%] px-4 py-2 rounded-2xl shadow-md text-sm white-space-pre-wrap ${isAssistant ? "bg-violet-300 text-left" : "bg-emerald-300 text-right"}`}
                            >
                                <span
                                    className={`block font-semibold mb-1 text-xs uppercase tracking-wide ${
                                        isAssistant
                                            ? "text-violet-700"
                                            : "text-emerald-800"
                                    }`}
                                >
                                    {isAssistant ? "Recruiter" : "ZuriHz"}
                                </span>
                                <span>{msg.content}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
