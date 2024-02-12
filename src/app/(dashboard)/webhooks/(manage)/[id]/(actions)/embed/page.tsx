"use client";
import GetUser from "@/hooks/GetUser";
import GetWebhook from "@/hooks/GetWebhook";
import { Action, EmbedOptions, WebhookData, WebhookSendEmbedOptions } from "@/util/types";
import { EmbedForm } from "@/components/ui/Form";
import { embedFormInputs } from "@/config/constants";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Page() {

    /*
        EMBED VALUES
    */
    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [authorName, setAuthorName] = useState<string>();
    const [authorIcon, setAuthorIcon] = useState<string>();
    const [authorUrl, setAuthorUrl] = useState<string>();
    const [url, setUrl] = useState<string>();
    const [color, setColor] = useState<string>();
    const [fieldTitles, setFieldTitles] = useState<string[]>();
    const [fieldValues, setFieldValues] = useState<string[]>();
    const [fieldInlines, setFieldInlines] = useState<boolean[]>();
    const [image, setImage] = useState<string>();
    const [thumbnail, setThumbnail] = useState<string>();
    const [timestamp, setTimestamp] = useState<Date>();
    const [footerText, setFooterText] = useState<string>();
    const [footerIconUrl, setFooterIconUrl] = useState<string>();
    /* 
        END EMBED VALUES
    */
    const [webhookData, setWebhookData] = useState<WebhookData>();

    const user = GetUser();

    useEffect(() => {

        if (user) {
            GetWebhook(user.id).then((res) => setWebhookData(res));
        }

    }, [user])

    /* 
        EMBED ACTIONS
    */
    const actions: Action[] = [
        {
            name: "Title",
            dispatch: setTitle
        },
        {
            name: "Description",
            dispatch: setDescription
        },
        {
            name: "URL",
            dispatch: setUrl
        },
        {
            name: "Color",
            dispatch: setColor
        },
        {
            name: "Image",
            dispatch: setImage
        },
        {
            name: "Thumbnail",
            dispatch: setThumbnail
        },
        {
            name: "Timestamp",
            dispatch: setTimestamp
        },
        // author
        {
            name: "Name",
            dispatch: setAuthorName
        },
        {
            name: "Icon",
            dispatch: setAuthorIcon
        },
        {
            name: "Author URL",
            dispatch: setAuthorUrl
        },
        // fields
        {
            name: "Field title",
            dispatch: setFieldTitles
        },
        {
            name: "Field value",
            dispatch: setFieldValues
        },
        {
            name: "Inline",
            dispatch: setFieldInlines
        },
        // footer
        {
            name: "Text",
            dispatch: setFooterText
        },
        {
            name: "Icon URL",
            dispatch: setFooterIconUrl
        }

    ]
    /*
        END ENBED ACTIONS
    */

    const handleSubmit = async () => {

        if (title || description || authorName || authorIcon || authorUrl || url || color || image || thumbnail || fieldTitles || fieldValues || fieldInlines || timestamp) {
            const embedOptions: EmbedOptions = {
                title: title,
                description: description,
                url: url,
                color: color,
                author: {
                    url: authorUrl,
                    name: authorName,
                    icon: authorIcon
                },
                image: image,
                thumbnail: thumbnail,
                footer: {
                    text: footerText,
                    iconURL: footerIconUrl,
                },
                timestamp: timestamp,
            }

            const data: WebhookSendEmbedOptions = {
                webhookData: webhookData!,
                embedOptions: embedOptions  
            }

            try {
                await axios.post(`/api/webhook/embed`, data
                )
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err))
                    .finally(() => {
                        toast.success("Embed sent!");
                    })
            } catch (err) {
                console.log(err);
            }
        } else {
            toast.error("You must fill out at least one option!");
        }
    }

    return (
        <div className="w-3/4 h-full">
            <div className="w-full flex items-center justify-center py-4">
                <h1 className="text-center text-2xl">
                    Send an embed
                </h1>
            </div>
            <EmbedForm inputs={embedFormInputs} actions={actions} buttonTxt="Send" submitInfo={async () => await handleSubmit()} />
        </div>
    );
}