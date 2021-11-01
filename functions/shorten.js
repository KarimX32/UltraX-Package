const Discord = require("discord.js");

/**
* Create a short url for a Discord.js Bot
 * @param {String} url The URL to be shorten
 * @returns {Promise<String>} 
 */
module.exports = async function shorten(url) {
    return new Promise((resolve, reject) => {
        const TinyURL = require('tinyurl');
        try {
            require.resolve("tinyurl");
        } catch (e) {
            throw new Error("[UltraX] => Cannot find module 'tinyurl' Please run 'npm i tinyurl@latest'");
        }
        if (!url) throw new SyntaxError(`Shorten =>  "No url provided"`);
        if (typeof url != "string") throw new SyntaxError(`Shorten => "The url should be type string"`);
        if (!is_url) throw new ReferenceError(`Shorten => The url must starts with http:// or https://`);
        TinyURL.shorten(url, function (res, error) {
            if (error || res == "Error") {
                reject("Shorten => Somthing Goes Wrong");
            }
            resolve(res)
        });
    });
}




const is_url = (str) => {
    let regexp = /http[s]?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*(),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+\.[a-zA-Z]{2,}[/]?.*/g
    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}