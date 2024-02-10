import axios from "axios";

export const discordApi = (botToken: string) => axios.create({
    baseURL: "https://discord.com/api/",
    timeout: 3000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization",
        Authorization: `Bot ${botToken}`
    }
})