import { Badge } from "@/components/ui/badge";

export function StatusPaid() {
    return (
        <div className="flex items-start gap-4 p-3 border rounded-2xl bg-purple-500/20 text-white border-white shadow-lg">
            <div>
                <h3 className="font-semibold text-2xl mb-2 text-center">
                    🚀 Full Access
                </h3>
            <Badge
                variant="outline"
                className="w-full bg-white text-purple-600 py-1"
                >
                Activate Plan
            </Badge>
            <p className="text-sm text-center mt-2">
                Ypu can practice inlimited interviews with AI
            </p>
            </div>
        </div>
    );
}
