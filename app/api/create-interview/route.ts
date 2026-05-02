import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
    const { userId } = await auth();
    try {
        if (!userId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 },
            );
        }
        let user = await db.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            user = await db.user.create({
                data: {
                    id: userId,
                },
            });
        }

        const { name, role, level } = await req.json();

        const interview = await db.interview.create({
            data: {
                userId: userId,
                name: name,
                rol: role,
                level: level,
            },
        });

        return NextResponse.json(interview);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 },
        );
    }
}
