# Discord Webhook App

 > Dynamically manage Discord webhooks with Nextjs routing, data fetching, and firebase for data storage.

---

The idea is to allow authenticated Discord users to create and manage webhook actions through an easy interface.

---

## How it works?

- users authenticate with Discord (through [clerk](https://clerk.com/))
    > unauthenticated users can't access pages to manage webhooks
- user then add the credentials of an existing webhook to the add a webhook page
- the webhook information & UUID are stored in [firebase](https://firebase.google.com/)
- the user may now select actions for the webhook

---
### Webhook actions example

##### webhook function

```ts
const sendWebhook = async () => {
    await webhook.send({
        embeds: [embed]
    })
}
```

##### api route

```ts
export async function POST(req: Request) {
    try {
        await sendWebhook();
    } catch (err: any) {
        console.log(err);
    }
    return new Response();
}
```

##### client component

```tsx
"use client";
import axios from "axios";

const Component = () => {
    const handleClick = async () => {
        try {
            await axios.post(`/api/${routeName}`)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <button onClick={async () => await handleClick()}>
            click to send embed
        </button>
    );
}

export default Component;
```

---

### Example creating a webhook through a Discord client

- create a [discord application](https://discord.com/developers/applications)
- create a channel designated for it's use within a discord server
- invite the discord bot to the server
    - make sure the bot has **manage webhook** permissions within the channel
- use [postman](https://www.postman.com/) to create a **POST** request
    - include a name in the body:
    ```json
    {
        "name": "yourwebhookname"
    }
    ```
    - headers: `Authorization` : `Bot bot123token`
    - `https://discordapp.com/api/channels/CHANNELID/webhooks`
> you just created a webhook with your bot


