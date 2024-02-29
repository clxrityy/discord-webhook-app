import webhook from '@/util/webhook';
import { EmbedOptions, WebhookSendEmbedOptions } from '@/util/types';
import { ColorResolvable, EmbedBuilder, Colors } from "discord.js";

const embed = (options: EmbedOptions): EmbedBuilder => {
    let finalEmbed = new EmbedBuilder();

    options.title && finalEmbed.setTitle(options.title);
    options.url && finalEmbed.setURL(options.url);
    options.color ? finalEmbed.setColor(options.color as ColorResolvable) : finalEmbed.setColor(Colors.Default);
    // // options.author && options.author.name || options.author?.icon && finalEmbed.setAuthor({
    // //     name: options.author.name,
    // //     url: options.author.url,
    // //     iconURL: options.author.icon,
    // // });
    options.image && finalEmbed.setImage(options.image);
    options.thumbnail && finalEmbed.setThumbnail(options.thumbnail);
    // options.footer && finalEmbed.setFooter({
    //     text: options.footer.text!,
    //     iconURL: options.footer.iconURL!
    // });
    options.timestamp && finalEmbed.setTimestamp(options.timestamp);
    // options.fields && finalEmbed.addFields(options.fields);

    return finalEmbed;
}

const sendEmbed = async ({ embedOptions, webhookData, options }: WebhookSendEmbedOptions) => {

    const wh = webhook(webhookData);

    const em = embed(embedOptions);

    await wh.send(
        {
            embeds: [em],
            options: {
                username: options?.username,
                avatarURL: options?.avatarURL,
            }
        });
}

export default sendEmbed;