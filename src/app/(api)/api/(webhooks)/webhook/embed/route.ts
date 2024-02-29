import sendEmbed from "@/util/embed";
import { WebhookSendEmbedOptions } from "@/util/types";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    const data: WebhookSendEmbedOptions = await req.json();

    try {
        await sendEmbed(data).catch((err) => console.log(err))

    } catch (err) {
        console.log(err);
    }

    return new Response();
}