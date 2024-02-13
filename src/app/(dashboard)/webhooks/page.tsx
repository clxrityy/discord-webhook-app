"use client";

import CreateBlock from "@/components/misc/CreateBlock";
import Loading from "@/components/ui/Loading";
import GetUser from "@/hooks/GetUser";
import GetWebhook from "@/hooks/GetWebhook";
import { WebhookData } from "@/util/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Page() {

    const [webhook, setWebhook] = useState<WebhookData>();

    const user = GetUser();
    const router = useRouter();

    useEffect(() => {

        const fetchWebhook = async () => {
            if (user) {
                setWebhook(await GetWebhook(user.id));
            }
        }

        fetchWebhook();

    }, [user, webhook]);


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

    if (user && webhook)
        return (
            <div className="w-full min-h-screen px-10 py-32 flex flex-col items-center gap-10">
                <div>
                    <h1 className="text-3xl md:text-4xl text-center">
                        <span className="font-semibold tracking-wide">{user.username}</span>&#39;s webhook
                    </h1>
                </div>
                <div className="border border-primary rounded-md py-4 px-10 flex flex-row items-center gap-4 transition-all hover:scale-110 shadow-inner shadow-primary">
                    <Link className="text-xl hover:underline underline-offset-4 text-gray-200 tracking-widest" href={`/webhooks/${webhook.uuid}`}>
                        {webhook.uuid}
                    </Link>
                </div>
            </div>
        );
    return <div className="h-full w-full flex justify-center items-center">
        <Loading size={200} />
    </div>
}