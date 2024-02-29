import { DocumentData } from "firebase/firestore";
import { IconType } from "react-icons";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { EmbedBuilder, WebhookClient } from "discord.js";

/* 

DISPLAY

*/

export type MenuItem = {
    title: string;
    icon?: IconType;
    path: string;
}

export type Action = {
    name: string;
    dispatch: Dispatch<string | any>;
}

// forms

export type FormInput = {
    label: string;
    placeholder?: string;
    type: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, action: Dispatch<SetStateAction<string | any>>) => void;
    required?: boolean;
}

export interface EmbedFormInput<T extends EmbedOptions> extends FormInput {
    params?: T["author" | "footer" | "fields"] & {
        label: string;
        type: string;
        placeholder?: string;
        onChange: (e: ChangeEvent<HTMLInputElement>, action: Dispatch<SetStateAction<string | any>>) => void
    }[]
}

// Discord embed

export interface Field {
    name: string;
    value: string;
    inline?: boolean;
}

export type EmbedOptions = {
    title?: string;
    url?: string;
    description?: string;
    color?: string;
    author?: {
        icon?: string;
        name?: string;
        url?: string;
    },
    fields?: Field[];
    image?: string;
    thumbnail?: string;
    footer?: {
        text?: string;
        iconURL?: string;
    };
    timestamp?: Date;
}

export type WebhookSendEmbedOptions = {
    embedOptions: EmbedOptions,
    webhookData: WebhookData,
    options?: {
        username?: string;
        avatarURL?: string;
    }
}



// export type CommandBuild = {
//     name: string;
//     description: string;
//     options?: any[];
// }

// export type SlashCommand = {
//     data: | Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">
//     | SlashCommandSubcommandsOnlyBuilder;
//     userPermissions: Array<bigint>;
//     botPermissions: Array<bigint>;
//     run: (client: Client, interaction: CommandInteraction) => Promise<any>;
// }

/* 

DATABASE

*/

// USER

export interface UserData {
    username: string;
    id: string;
}

// BOT

export interface BotData {
    name?: string;
    id: string;
    token: string;
    avatar?: string;
    publicKey?: string;
}

// WEBHOOK

export interface WebhookData extends DocumentData {
    id: string;
    token: string;
    uuid: string;
}
