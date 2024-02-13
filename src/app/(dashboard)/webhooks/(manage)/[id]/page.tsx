"use client"

import WebhookWrapper from "@/components/wrappers/Webhook";
import GetUser from "@/hooks/GetUser";
import GetWebhook from "@/hooks/GetWebhook";
import { WebhookData } from "@/util/types";
import { useEffect, useState } from "react";


export default function Page({ params }: { params: { id: string } }) {

    const user = GetUser();

    const [webhook, setWebhook] = useState<WebhookData>();

    useEffect(() => {

        const fetchWebhook = async () => {
            if (user) {
                setWebhook(await GetWebhook(user.id));
            }
        }

        fetchWebhook();

    }, [user, webhook]);

    return (
        <div className="h-full w-full px-5 py-10 flex items-center flex-col">
            <div className="text-center gap-8 flex flex-col">
                <h1 className="text-3xl">
                    <span className="font-semibold">Webhook</span> (<span className="tracking-widest text-base font-bold text-gray-300">
                        {params.id}
                    </span>)
                </h1>
                <h2 className="text-lg">
                    Logged in as <span className="font-semibold text-primary">
                        {user ? user.username : <span className="text-sm text-gray-300 animate-pulse tracking-widest">
                            ...
                        </span>}
                    </span>
                </h2>
            </div>

            {
                webhook && user && <WebhookWrapper userId={user.id} webhook={webhook} />
            }
        </div>
    );

}