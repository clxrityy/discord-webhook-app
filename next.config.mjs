/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BOT_TOKEN: process.env.BOT_TOKEN,
        APPLICATION_ID: process.env.APPLICATION_ID,
        PUBLIC_KEY: process.env.PUBLIC_KEY,
        WEBHOOK_TOKEN: process.env.WEBHOOK_TOKEN,
        WEBHOOK_ID: process.env.WEBHOOK_ID,
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDERER_ID
    },
    compress: true,
};

export default nextConfig;
