import { Client, MessageAttachment, MessageEmbed, Message, ColorResolvable, Snowflake } from "discord.js";

/**
 * Code and detailed explanation for UltraX package
 */
declare module "ultrax";

export class sussyBaka {

    constructor(baka: string);

    public get(): Promise<MessageAttachment>;

}

export class Wikipedia {

    constructor(options: WikipediaOptions);

    public fetch(): Promise<void>;

}

export function bin(code: string): Promise<string>;

export function ButtonPaginator(message: string, pages: MessageEmbed[], buttons?: ButtonOptions[], time?: number): Promise<void>;

export function connectToMongoDB(MongoDBURI: string): void;

export function daBaby(url: string): Promise<MessageAttachment>;

export function docs(query: string, branch: string, message: Message): Promise<void>;

export function inviteLogger(client: Client): Promise<void>;

export function passGen(Length: number): string;

export function remind(memberID: Snowflake, time: string, reason: string): Promise<void>;

export function sleep(milliseconds: number): Promise<void>;

export function welcomeImage(background: string, avatar: string, text_1?: string, text_2?: string, text_3?: string, color?: string, settings?: WelcomeImageSettingOptions): Promise<MessageAttachment>;

export function boostImage(url: string): Promise<string>;

export function start(client: Client, boostRoleID: Snowflake): Promise<void>;

interface ButtonEmojiOptions {
    id?: string,
    name: string,
    animated?: boolean;
}

interface ButtonOptions {
    style: ButtonStyleOptions;
    label: string;
    emoji?: ButtonEmojiOptions;
    url?: string;
    custom_id: string;
    id?: ButtonIDOptions;
}

interface WelcomeImageSettingOptions {
    font?: string;
    attachtmentName?: string;
}

interface WikipediaOptions {
    message: Message;
    title?: string;
    color: ColorResolvable;
    query: string;
}

type ButtonStyleOptions = "green" | "red" | "blurple" | "grey" | "url";

type ButtonIDOptions = "next" | "back";