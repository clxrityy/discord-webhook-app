import { WebhookClient } from "discord.js";
import GetWebhook from "@/hooks/GetWebhook";
import app from "@/lib/firebase";
import { doc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { UserData, WebhookData } from "./types";

const webhook = (data: WebhookData): WebhookClient => {
    
    const client = new WebhookClient({
        id: data.id,
        token: data.token
    });

    return client;
}

export default webhook;

export const buildWebhook = async (user: UserData, webhookData: WebhookData) => {

    const db = getFirestore(app);
    let webhook: WebhookData | undefined;

    webhook = GetWebhook(user.id);


    if (!webhook) {
        try {
            const data = await setDoc(doc(db, "webhooks", user.id), {
                id: webhookData.id,
                token: webhookData.token,
                uuid: webhookData.uuid,
            } as WebhookData)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));

            console.log(data);

            return data;
        } catch (err) {
            console.log(err);
        }
    } else {
        // doesn't make multiple webhooks yet :(
        try {
            const docRef = doc(db, "webhooks", user.id);

            await updateDoc(docRef, {
                id: webhookData.id,
                token: webhookData.token,
                uuid: webhookData.uuid,
            } as WebhookData);

        } catch (err) {
            console.log(err);
        }
    }
}