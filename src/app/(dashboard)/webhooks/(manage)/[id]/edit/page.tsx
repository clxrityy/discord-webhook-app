"use client"

import Loading from "@/components/ui/Loading";
import GetUser from "@/hooks/GetUser";
import GetWebhook from "@/hooks/GetWebhook";
import { WebhookData } from "@/util/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditWebhookPage = () => {

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

    if (user && webhook) {
        return <div className="w-full h-full">
            <div className="flex flex-col items-center text-center gap-5 px-5 py-10">
            <h1 className="text-2xl md:text-4xl font-semibold">
                    Edit your webhook
                </h1>
            </div>
        </div>
    }

    return <div className="h-full w-full flex justify-center items-center">
        <Loading size={200} />
    </div>
}

export default EditWebhookPage;