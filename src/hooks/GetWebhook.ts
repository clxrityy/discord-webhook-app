import app from "@/lib/firebase";
import { WebhookData } from "@/util/types";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";


export default function GetWebhook(userId: string) {

    const [webhook, setWebhook] = useState<WebhookData>();

    const db = getFirestore(app);
    const docRef = doc(db, "webhooks", userId);


    useEffect(() => {
        async function getWebhook() {
            try {
                const docSnapshot = await getDoc(docRef);

                if (docSnapshot.exists())
                    setWebhook(docSnapshot.data() as WebhookData);
            } catch (err: any) {
                console.log(err.message);
                throw new Error(err);
            }
        }

        getWebhook().then((res) => console.log(res));
    }, [docRef]);

    if (webhook)
        return webhook;
}