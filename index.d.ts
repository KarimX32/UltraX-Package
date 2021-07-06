import { Client, MessageAttachment, MessageEmbed, Message, ColorResolvable } from "discord.js";

/**
 * Code and detailed explanation for UltraX package
 */
declare module "ultrax";

export class Wikipedia {

    constructor(options: WikipediaOptions);

    public fetch(): Promise<void>;

}
export class sussyBaka {

    constructor(baka: string);

    public get(): Promise<MessageAttachment>;

}
export function sleep(milliseconds: number): Promise<void>;

export function passGen(Length: number): string;

export function inviteLogger(client: Client): Promise<void>;

export function bin(code: string): Promise<string>;

export function welcomeImage(background: string, avatar: string, text_1?: string, text_2?: string, text_3?: string, color?: string, settings?: WelcomeImageSettingOptions): Promise<MessageAttachment>;

export function ButtonPaginator(message: string, pages: MessageEmbed[], buttons?: ButtonOptions[], time?: number): Promise<void>;


export function remind(memberID?: string, reason?: string,  time?: string): Promise<void>;

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