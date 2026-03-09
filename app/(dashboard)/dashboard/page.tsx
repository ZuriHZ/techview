import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import {} from "lucide-react";
import { CheckCircle, TrendingUp, Clock, ClipboardCheck } from "lucide-react";
import { MetricCard } from "./components";
import { title } from "process";
import { success } from "zod";

export default async function DashboardPage() {
    const { userId } = await auth();

    if (!userId) {
        return null;
    }

    const interview = await db.interview.findMany({
        where: { userId },
        select: { startedAt: true, completedAt: true, transcript: true },
    });

    const total = interview.length;

    const completedInterview = interview.filter((i) => i.completedAt != null);

    const totalDurationMs = completedInterview.reduce((acc, i) => {
        return acc + (i.completedAt!.getTime() - i.startedAt.getTime());
    }, 0);

    const avgDuration = completedInterview.length
        ? Math.round(totalDurationMs / completedInterview.length / 1000 / 60)
        : 0;

    const succesRate = total > 0 ? 100 : 0;

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-3 rounded-md p-6 bg-white-10 backdrop-blur-lg text-white border border-white/20">
                <MetricCard
                    icon={<CheckCircle className="text-green-400" />}
                    title="Completed"
                    value={completedInterview.length}
                />
                <MetricCard
                    icon={<ClipboardCheck className="text-yellow-400" />}
                    title="Total"
                    value={total}
                />
                <MetricCard
                    icon={<Clock className="text-purple-400" />}
                    title="Avarage time"
                    value={`${avgDuration} min`}
                />
                <MetricCard
                    icon={<TrendingUp className="text-blue-400" />}
                    title="Succes rate"
                    value={succesRate}
                />
            </div>
            <div>
                <div className="mt-4 p-4 bg-blue-600/20 border border-blue-400/30 rounded-md ">
                    <div className="text-sm text-blue-200">
                        <strong>💡 Advice: </strong>
                        Our AI interview is here to help you prepare for you
                        next interview. It provider you with a personalized and
                        interactive experience, tailored to your needs and
                        preference
                    </div>
                </div>
            </div>
        </div>
    );
}
