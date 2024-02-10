"use client";

import GetUser from "@/hooks/GetUser";
import GetWebhook from "@/hooks/GetWebhook";
import { Action, WebhookData } from "@/util/types";
import { EmbedForm } from "@/components/ui/Form";
import { embedFormInputs } from "@/config/constants";
import { useState } from "react";

export default function Page() {

    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();

    const actions: Action[] = [
        {
            name: "Title",
            dispatch: setTitle
        },
        {
            name: "Description",
            dispatch: setDescription
        }
    ]

    const sendEmbed = async () => {

    }

    return (
        <div className="w-full h-full">
            <EmbedForm inputs={embedFormInputs} actions={actions} buttonTxt="Send" submitInfo={async () => sendEmbed()} />
        </div>
    );
}