"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { StatusFreeTrial } from "./StatusFreeTrial";
import { StatusPaid } from "./StatusPaid";
import { Button } from "@/components/ui/button";

export function AccesStatus() {
    const [open, setOpen] = useState(false);

    const haspaid = false;
    const statusFree = true;

    if (haspaid) {
        return <StatusPaid />;
    }

    if (statusFree) {
        return <StatusFreeTrial />;
    }

    const handleOpenChange = () => {
        setOpen(!open);
    };

    return (
        <div className="p-4 border-white bg-purple-800/20 border rounded-md">
            <h3 className="font-semibold text-xl mb-1">🚫 Plan no activated</h3>
            <Badge variant="outline" className="w-full py-1 bg-red-700/20">
                Limited access
            </Badge>
            <p className="text-xs mt-2 mb-3">You have used your free trial</p>
            <Dialog open={open} onOpenChange={handleOpenChange}>
                <DialogTrigger asChild>
                    <Button
                        variant="secondary"
                        className="w-full py-1 font-semibold text-purple-700"
                    >
                        Unlock for 9,99 €
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0 overflow-hidden">
                    <DialogHeader>
                        <DialogTitle className="hidden">Purchase</DialogTitle>
                        <div
                            id="checkout-modal"
                            className="min-h-[600px]"
                        ></div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
