"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Interview } from "@prisma/client";
import axios from "axios";
import { Messages, UserBoxes } from "./components";
import { Message, MessageVapi, Speaker, StatusCall } from "./page.types";
import { vapi } from "@/lib/vapi.sdk";
import { Variable } from "lucide-react";
import { toast } from "sonner";

export default function InterviewPage() {
    const params = useParams();
    const interviewId = params.interviewId;
    const router = useRouter();
    const [callStatus, setCallStatus] = useState<StatusCall>(
        StatusCall.INACTIVE,
    );
    const [isMuted, setisMuted] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [speaking, setSpeaking] = useState<Speaker>(null);
    const [interview, setInterview] = useState<Interview>();

    useEffect(() => {
        const fetchInterview = async () => {
            try {
                const response = await axios.get(
                    `/api/interview/${interviewId}`,
                );
                setInterview(response.data);
            } catch (err) {
                console.error(err);
                // router.push("/dashboard");
            }
        };

        if (interviewId) {
            fetchInterview();
        }
    }, [interviewId, router]);

    useEffect(() => {
        const onCallStart = () => setCallStatus(StatusCall.ACTIVE);
        const onCallEnded = () => setCallStatus(StatusCall.INACTIVE);
        const onSpeachStart = () => {};
        const onSpeachEnd = () => {};
        const onError = (error: Error) => console.error(error);
        const onMessage = (message: any) => {
            if (
                message.type === "transcript" &&
                message.transcriptType === "final"
            ) {
                const newMessage = {
                    role: message.role,
                    content: message.transcript,
                };
                setMessages((prev) => [...prev, newMessage]);

                if (message.role === "assistant") {
                    setSpeaking("ai");
                } else if (message.role === "user") {
                    setSpeaking("user");
                }
            }
        };

        vapi.on("call-start", onCallStart);
        vapi.on("call-end", onCallEnded);
        vapi.on("message", onMessage);
        vapi.on("speech-start", onSpeachStart);
        vapi.on("speech-end", onSpeachEnd);
        vapi.on("error", onError);
        return () => {
            vapi.off("call-start", onCallStart);
            vapi.off("call-end", onCallEnded);
            vapi.off("message", onMessage);
            vapi.off("speech-start", onSpeachStart);
            vapi.off("speech-end", onSpeachEnd);
            vapi.off("error", onError);
        };
    }, []);

    const toggleMicrophone = () => {
        const isMuted = vapi.isMuted();
        vapi.setMuted(!isMuted);
        setisMuted(!isMuted);
    };

    const startCall = async () => {
        setCallStatus(StatusCall.CONNECTING);

        const assistantOverrides = {
            variableValues: {
                topic: `Rol: ${interview?.rol} Nivel: ${interview?.level}`,
            },
        };

        if (vapi) {
            vapi.start(
                "8bbeb474-f4b1-4830-904e-71820c813a93",
                assistantOverrides,
            );
        }
    };

    const endCall = async () => {
        setCallStatus(StatusCall.FINISHED);

        toast("Interview finished");

        if (vapi) {
            vapi.stop();
        }

        try {
            await axios.post(`/api/interview/${interviewId}/complete`, {
                transcript: messages,
            });
        } catch (error) {
            console.error(error);
        }

        router.push("/dashboard");
    };

    return (
        <div className="max-w-6xl h-full mx-auto p-6 flex flex-col justify-center items-center">
            <div className="flex items-center justify-between w-full">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    Interview in progress
                    <span className="relative flex h-2 w-2 items-center">
                        <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-lime-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
                    </span>
                </h1>
                <p className="text-foreground/80 capitalize">
                    {`Rol: ${interview?.rol} o Level: ${interview?.level}`}
                </p>
            </div>

            <UserBoxes
                callStatus={callStatus}
                endCall={endCall}
                startCall={startCall}
                isMuted={isMuted}
                toggleMicrophone={toggleMicrophone}
                speaking={speaking}
            />

            <Messages message={messages} />
        </div>
    );
}
