"use client";

import Form from "@/components/ui/Form";
import { webhookFormInputs } from "@/config/constants";
import GetUser from "@/hooks/GetUser";
import { buildWebhook } from "@/util/build";
import { Action, UserData, WebhookData } from "@/util/types";
import { uuid } from "@/util/uuid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Page() {

    const [webhookID, setWebhookID] = useState<string>();
    const [webhookToken, setWebhookToken] = useState<string>();

    const [isWebhookBuilt, setIsWebhookBuilt] = useState<boolean>(false);

    const user = GetUser();
    const router = useRouter();

    const webhookUuid: string = uuid();

    const actions: Action[] = [
        {
            name: "ID",
            dispatch: setWebhookID,
        },
        {
            name: "Token",
            dispatch: setWebhookToken
        }
    ];

    const submitInfo = async () => {

        const userData: UserData = {
            username: user!.username!,
            id: user!.id!,
        }

        if (webhookID && webhookToken) {

            const webhook: WebhookData = {
                id: webhookID,
                token: webhookToken,
                uuid: webhookUuid,
            }

            try {
                await buildWebhook(userData, webhook)
                    .catch((err) => console.log(err));

                setIsWebhookBuilt(true);

                if (isWebhookBuilt) {
                    const notification = toast.success("Webhook added!");
                    router.replace(`/webhooks/${webhookUuid}`);
                    toast.remove(notification);
                }
            } catch (err: any) {
                toast.error("Error adding your webhook!");
                throw new Error(err.message);
            }
        }
    }

    return (
        <div className="w-full h-full">
            <div className="flex flex-col items-center text-center gap-5 px-5 py-10">
                <h1 className="text-2xl md:text-4xl font-semibold">
                    Add your webhook
                </h1>
                <p className="text-base lg:text-lg">
                    See the <Link className="text-primary font-semibold hover:uderline underline-offset-2" href="/docs">
                        documentation
                    </Link> for more information abouts etting up a Discord webhook.
                </p>
            </div>

            <Form buttonTxt="Add" inputs={webhookFormInputs} actions={actions} submitInfo={async () => await submitInfo()}
            />
        </div>
    )
}