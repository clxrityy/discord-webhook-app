import sendEmbed from "@/util/embed";
import { WebhookSendEmbedOptions } from "@/util/types";

export async function POST(req: Request) {

    const data: WebhookSendEmbedOptions = await req.json();

    try {
        await sendEmbed(data).then((res) => console.log(res)).catch((err) => console.log(err));

    } catch (err) {
        console.log(err);
    }

    return new Response();
}