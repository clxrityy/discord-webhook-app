import { EmbedOptions, WebhookSendEmbedOptions } from '@/util/types';
import { ColorResolvable, EmbedBuilder, Colors, WebhookClient } from "discord.js";

export const embed = (options: EmbedOptions): EmbedBuilder => {
    let finalEmbed = new EmbedBuilder();

    options.title && finalEmbed.setTitle(options.title);
    options.url && finalEmbed.setURL(options.url);
    options.color ? finalEmbed.setColor(options.color as ColorResolvable) : finalEmbed.setColor(Colors.Default);
    options.author && finalEmbed.setAuthor({
        name: options.author.name!,
        url: options.author.url!,
        iconURL: options.author.icon,
    });
    options.image && finalEmbed.setImage(options.image);
    options.thumbnail && finalEmbed.setThumbnail(options.thumbnail);
    options.footer && finalEmbed.setFooter({
        text: options.footer.text!,
        iconURL: options.footer.iconURL!
    });
    options.timestamp && finalEmbed.setTimestamp(options.timestamp);
    options.fields && finalEmbed.addFields(options.fields)

    return finalEmbed;
}

const sendEmbed = async ({ embeds, webhook, options }: WebhookSendEmbedOptions) => {

    await webhook.send(
        {
            embeds: embeds,
        });
}

export default sendEmbed;