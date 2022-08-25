import { Client, MessageAttachment, MessageButton, MessageEmbed, Message, ColorResolvable, Snowflake } from "discord.js";

/**
 * Typings for UltraX package
 */
declare module "ultrax";

export class Wikipedia {

    constructor(options: WikipediaOptions);

    public send(): Promise<void>;

}

export function bin(code: string): Promise<string>;

export function buttonPaginator(message: Message, pages: MessageEmbed[], buttons?: MessageButton[], time?: number): Promise<void>;

export function connectToMongoDB(MongoDBURI: string): void;

export function dababy(url: string): Promise<MessageAttachment>;

export function inviteLogger.init(client: Client): void;

export function boost.init(client: Client): void;

export function reminder.init(client: Client): void;

export function passGen(length: number): string;

export function remind(memberID: Snowflake, time: string, reason: string): void;

export function sleep(milliseconds: number): Promise<void>;

export function welcomeImage(background: string, avatar: string, title?: string, subtitle?: string, footer?: string, color?: string, settings?: WelcomeImageSettingsOptions): Promise<MessageAttachment>;

export function boostImage(url: string): string;

export function sussybaka(url: String): Promise<MessageAttachment>;

interface ButtonEmojiOptions {
    id?: string,
    name: string,
    animated?: boolean;
}

interface WelcomeImageSettingsOptions {
    font?: string;
    attachmentName?: string;
    title_fontSize?: number;
    subtitle_fontSize?: number;
    footer_fontSize?: number;
}

interface WikipediaOptions {
    reply: Message|any;
    title?: string;
    color: ColorResolvable;
    query: string;
}

type ButtonStyleOptions = "green" | "red" | "blurple" | "grey" | "url";

type ButtonIDOptions = "next" | "back";