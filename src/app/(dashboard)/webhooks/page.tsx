"use client";

import CreateBlock from "@/components/misc/CreateBlock";
import GetUser from "@/hooks/GetUser";
import GetWebhook from "@/hooks/GetWebhook";
import { WebhookData } from "@/util/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {

    let webhook: WebhookData | undefined;

    const user = GetUser();
    const router = useRouter();

    if (user) {
        webhook = GetWebhook(user.id);
    }


    if (!webhook)
        return (
            <div className="w-full px-10 py-4 flex flex-col items-center justify-center min-h-screen gap-20">
                <h1 className="text-4xl text-center">
                    You don&#39;t have any webhooks set up yet!
                </h1>
                <div className="grid grid-flow-col justify-center h-[50vh] w-full">
                    <CreateBlock onClick={() => router.push('/webhooks/add')}>
                        <span className="text-xl">
                            Add a webhook
                        </span>
                    </CreateBlock>
                </div>
            </div>
        )

    return (
        <div className="w-full min-h-screen px-10 py-4 flex flex-col items-center">
            You have a webhook set up!
            
            Here it is: <Link href={`/webhooks/${webhook.uuid}`}>
                WEBHOOK {webhook.uuid}
            </Link>
        </div>
    );
}