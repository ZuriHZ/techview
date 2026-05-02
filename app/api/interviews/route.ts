import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json("Unauthorized", { status: 401 });
        }

        const interviews = await db.interview.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json(interviews);
    } catch (error) {
        console.error(error);
        return NextResponse.json("Internal server error", { status: 500 });
    }
}
