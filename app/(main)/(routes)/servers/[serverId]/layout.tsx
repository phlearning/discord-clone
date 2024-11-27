import { ServerSidebar } from "@/components/server/server-sidebar";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { auth } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";

const ServerIdLayout = async ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { serverId: string }
}) => {
    const profile = await currentProfile();
    const { userId, redirectToSignIn } = await auth();
    const { serverId } = await params;

    if (!profile || !userId) {
        return redirectToSignIn();
    }

    const server = await db.server.findUnique({
        where: {
            id: serverId,
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if (!server) {
        return redirect("/")
    }

    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-60 z-20
                flex-col fixed inset-y-0"
            >
                <ServerSidebar serverId={serverId} />
            </div>
            <main className="h-full md:pl-60">
                {children}
            </main>
        </div>
    );
}

export default ServerIdLayout;
