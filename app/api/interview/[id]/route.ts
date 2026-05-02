import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;

    try {
        const interview = await db.interview.findUnique({
            where: { id },
        });

        if (!interview) {
            return NextResponse.json(
                { message: "Interview not found" },
                { status: 404 },
            );
        }
        return NextResponse.json(interview);
    } catch (error) {
        console.log("[INTERVIEW ID GET]", error);
        return NextResponse.json(
            { message: "error getting interview", error },
            { status: 500 },
        );
    }
}
