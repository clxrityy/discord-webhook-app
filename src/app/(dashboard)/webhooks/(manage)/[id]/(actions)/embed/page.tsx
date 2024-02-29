"use client";
import GetUser from "@/hooks/GetUser";
import GetWebhook from "@/hooks/GetWebhook";
import { Action, EmbedOptions, WebhookData, WebhookSendEmbedOptions } from "@/util/types";
import Form, { EmbedForm } from "@/components/ui/Form";
import { webhookUserFormInputs, embedFormInputs } from "@/config/constants";
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
    
    const [webhookUsername, setWebhookUsername] = useState<string>();
    const [webhookAvatar, setWebhookAvatar] = useState<string>();
    
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
    const embedActions: Action[] = [
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
    
    // webhook user actions

    const webhookUserActions: Action[] = [
        {
            name: "Username",
            dispatch: setWebhookUsername
        },
        {
            name: "Avatar",
            dispatch: setWebhookAvatar
        }
    ]

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
                embedOptions: embedOptions!,
                options: {
                    username: webhookUsername!,
                    avatarURL: webhookAvatar!
                }
            }

            console.log(webhookAvatar)

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
            <div className="w-full flex items-center justify-center py-4 flex-col gap-2">
                <h1 className="text-center text-4xl 2xl:text-5xl font-bold">
                    Send an embed
                </h1>
                <p className="text-sm text-gray-500 max-w-md text-center">
                    <span className="font-bold">
                        WARNING:
                    </span>
                    <br />options with multiple paramaters (author, fields, & footer) are not functional yet
                </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-10">
                <div className="mx-auto w-full">
                    <Form inputs={webhookUserFormInputs} actions={webhookUserActions} />
                </div>
                <EmbedForm inputs={embedFormInputs} actions={embedActions} buttontxt="Send" submitInfo={async () => await handleSubmit()} />
            </div>
        </div>
    );
}