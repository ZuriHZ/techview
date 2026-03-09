"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Headset } from "lucide-react";

import { FormCreateInterview } from "./FormCreateInterview";

export function BtnCreateInterview() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 cursor-pointer">
                    Crear nueva entrevista
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-purple-400">
                        Start Interview
                        <Headset />
                    </DialogTitle>
                    <FormCreateInterview />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
