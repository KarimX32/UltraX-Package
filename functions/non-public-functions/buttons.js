module.exports = async function buttonss(content, options, client, message) {
    if (!content) return `message.buttons('Hello World!', {
            buttons: [
                {
                    style: 'green',
                    label: 'Click to function!',
                    id: 'click_to_function'
                },
                {
                    style: 'url',
                    label: 'Vote for me!',
                    url: 'https://google.com/'
                }
            ]
        })`
    if (!options.buttons) {
        options.buttons = [];
    }

    if (!Array.isArray(options.buttons)) {
        throw new Error('The buttons must be an array');
    }

    let buttons = [];
    let styles = ['blurple', 'grey', 'green', 'red', 'url'];

    options.buttons.forEach((x, i) => {
        if (!x.style) x.style = 'blurple';

        if (!styles.includes(x.style)) {
            throw new Error(`#${i} button has invalid style, recived ${x.style}`);
        }

        if (!x.label) {
            throw new Error(`#${i} button don't has a label`);
        }

        if (typeof (x.label) !== 'string') x.label = String(x.label);

        if (x.style === 'url') {
            if (!x.url) {
                throw new Error(`If the button style is "url", you must provide url`);
            }
        } else {
            if (!x.id) {
                throw new Error(`If the button style is not "url", you must provide custom id`);
            }
        }

        let style;

        if (x.style === 'blurple') {
            style = 1;
        } else if (x.style === 'grey') {
            style = 2;
        } else if (x.style === 'green') {
            style = 3;
        } else if (x.style === 'red') {
            style = 4;
        } else if (x.style === 'url') {
            style = 5;
        }

        let data = {
            type: 2,
            style: style,
            label: x.label,
            custom_id: x.id || null,
            emoji: {
                name: null,
                id: null,
                animated: false,
            },
            url: x.url || null
        }

        buttons.push(data);
    })

    options.buttons === null;

    client.ws.on('INTERACTION_CREATE', async (data) => {

        let typeStyles = {
            1: 'blurple',
            2: 'grey',
            3: 'green',
            4: 'red',
            5: 'url'
        };

        await client.channels.cache.get(data.channel_id).messages.fetch();

        let message = await client.channels.cache.get(data.channel_id).messages.cache.get(data.message.id);

        let clicker = await client.guilds.cache.get(data.guild_id).members.cache.get(data.member.user.id);

        client.emit('clickButton', {
            version: data.version,
            type: data.type,
            style: typeStyles[data.type],
            token: data.token,
            id: data.data.custom_id,
            discordId: data.id,
            applicationId: data.application_id,
            clicker: clicker,
            message
        })
        if (data.data.custom_id === "next" || data.data.custom_id === "back") {
            await client.api.interactions(data.id, data.token).callback.post({
                data: {
                    type: 6,
                    data: {
                        flags: data ? 1 << 6 : null,
                    },
                },
            });
        }

    });

    return await client.api.channels[message.channel.id].messages.post({
        headers: {
            "Content-Type": 'applications/json'
        },
        data: {
            content: content,
            components: [{
                type: 1,
                components: buttons
            }],
            options,
            embed: options.embed || null
        }
    });
}