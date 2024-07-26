import { getUserId } from "@/lib/cookies"
import { redirect } from "next/navigation";

export default function page() {
    const id = getUserId();
    if(!id) redirect("/auth/login")
    return <div>

    </div>
}