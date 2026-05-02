import { Hand, Mic, MicOff, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { UserBoxesProps } from "./UserBoxes.type";
import { StatusCall } from "../../page.types";

export function UserBoxes(props: UserBoxesProps) {
    const {
        toggleMicrophone,
        isMuted,
        startCall,
        endCall,
        callStatus,
        speaking,
    } = props;
    const { user } = useUser();
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-5">
                <div className="relative h-[400px]">
                    <div className="h-full w-full bg-white/30 backdrop-blur-lg relative rounded-md">
                        <div
                            className="absolute inset-0 z-0 rounded-md"
                            style={{
                                backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(129,92,246,0.5) transparent)`,
                            }}
                        />
                        <div className="z-20 relative p-4 flex flex-col items-center justify-center gap-2 h-full">
                            <div className="relative flex items-center justify-center w-24 h-24">
                                {speaking === "ai" && (
                                    <span className="absolute inset-0 flex items-center justify-center w-full">
                                        <span className="animate-pulse absolute inline-flex h-16 w-16 rounded-full bg-blue-400"></span>
                                    </span>
                                )}
                                <div className="border-blue-200 bg-blue-100 border rounded-full p-2 relative z-10 flex items-center justify-center">
                                    <Image
                                        src="/assets/bot.png"
                                        alt="User bot"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                            </div>
                            <p className="text-lg font-semibold">AI Recluter</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[400px]">
                    <div
                        className={cn(
                            "h-full w-full bg-white/30 backdrop-blur-lg relative rounded-md",
                            "from-purple-900 via-slate-900 to-blue-900",
                            speaking === "user"
                                ? "border-amber-400 shadow-xl"
                                : "border-transparent",
                        )}
                    >
                        <div
                            className="absolute inset-0 z-0 rounded-md"
                            style={{
                                backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(255,220,190,0.5) transparent)`,
                            }}
                        />
                        <div className="p-4 flex flex-col items-center justify-center gap-2 h-full z-10 relative rounded-md">
                            <div className="relative">
                                {speaking === "user" && (
                                    <span className="absolute inset-0 flex items-center justify-center">
                                        <span className="animate-pulse absolute inline-flex h-20 w-20 rounded-full bg-amber-400 opacity-50"></span>
                                    </span>
                                )}

                                <div className="bg-amber-100 border-amber-200 border rounded-full p-2 relative z-10 flex">
                                    <Image
                                        src={
                                            user?.imageUrl ?? "/assets/bot.png"
                                        }
                                        alt="User avatar"
                                        width={60}
                                        height={60}
                                        className="rounded-full"
                                    />
                                </div>
                            </div>
                            <p className="text-lg font-semibold">
                                {user?.firstName ?? "User"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4">
                <div
                    className="p-2 bg-gray-500 text-white rounded-full cursor-pointer"
                    onClick={toggleMicrophone}
                >
                    {isMuted ? (
                        <MicOff className="h-5 w-5" />
                    ) : (
                        <Mic className="h-5 w-5" />
                    )}
                </div>
                <div className="p-2 bg-gray-500 text-white rounded-full">
                    <Hand className="h-5 w-5" />
                </div>
                <Button
                    className="px-6 py-2 bg-green-500 text-white rounded-full cursor-pointer hover:bg-green-300 hover:text-black"
                    onClick={startCall}
                    disabled={callStatus === StatusCall.ACTIVE}
                >
                    Start session
                    <Phone className="h-5 w-5 rotate-140" />
                </Button>
                <Button
                    className="px-6 py-2 bg-red-800 text-white rounded-full cursor-pointer "
                    onClick={endCall}
                >
                    End session
                    <Phone className="h-5 w-5 rotate-140" />
                </Button>
            </div>
        </div>
    );
}
