import { WebhookData } from "@/util/types";
import { WebhookClient } from "discord.js";

const webhook = (data: WebhookData): WebhookClient => {
    
    const client = new WebhookClient({
        id: data.id,
        token: data.token
    });

    return client;
}

export default webhook;
