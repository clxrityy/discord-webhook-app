"use server";
import app from "@/lib/firebase";
import { WebhookData } from "@/util/types";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export default async function GetWebhook(userId: string) {

    let webhook: WebhookData;

    const db = getFirestore(app);
    const docRef = doc(db, `webhooks`, userId);


    const docSnapshot = await getDoc(docRef);

    webhook = (docSnapshot.data() as WebhookData);


    return webhook;
}