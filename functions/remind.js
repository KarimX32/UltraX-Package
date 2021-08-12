const Discord = require("discord.js");
const schema = require("./schema/remind");
const ms = require("./non-public-functions/ms");

/**
 * Reminds a Guild Member
 * @param {Discord.Snowflake} memberID The ID of the member
 * @param {Number} time The reminder time
 * @param {String} reason The reminder
 * @returns {Promise<void>}
 */
module.exports = async (memberID, time, reason) => {
    if (!memberID) throw new Error('[UltraX] Error: Member is not defined in remind function')
    if (!time) throw new Error('[UltraX] Error: Time is not defined in remind function')
    if (!reason) throw new Error('[UltraX] Error: Reason is not defined in remind function')
    if (!ms(time.toString())) throw new Error('[UltraX] Error: Time is invalid in remind function')
    const data = new schema({
        memberID: (memberID),
        reason: (reason),
        time: (ms(time) + Date.now()), //Illegal turn here btw
        timeMS: ms(time.toString())
    });
    data.save().catch(e => console.log("[UltraX] Error: saving remind to db"))
};

/**
 * Fetch and reminds a Guild Member
 * @param {Discord.Client} client Discord Client
 * @returns {Promise<void>}
 */
module.exports.startRemind = async (client) => {
    if (!client) throw new Error('[UltraX] Error: Client is not defined in remind function')
    setInterval(() => {
        schema.find({}, function (err, docs) {
            if (err) return console.log(err)
            docs.forEach(async doc => {
                if (doc.time <= Date.now()) {
                    await schema.deleteOne(doc);
                    await client.users.fetch(doc.memberID);
                    client.emit('reminder', client.users.cache.get(doc.memberID), doc.reason, await parseMS(doc.timeMS), doc.timeMS)
                };
            });
        });
    }, 10000); // 10000 milsec
}

/**
 * Parse a ms
 * @param {number} ms 
 * @returns {Promise<String>}
 */
async function parseMS(ms) {
    if(typeof ms == "number"){
        let seconds = ms / 1000,

        days = seconds / 86400;
    seconds = seconds % 86400

    let hours = seconds / 3600;
    seconds = seconds % 3600

    let minutes = seconds / 60;
    seconds = seconds % 60;

    if (days) {
        return `${days} day, ${hours} hours, ${minutes} minutes`
    } else if (hours) {
        return `${hours} hours, ${minutes} minutes, ${seconds} seconds`
    } else if (minutes) {
        return `${minutes} minutes, ${seconds} seconds`
    }

    return `${seconds} second(s)`
    } else {
        return null;
    }
    
};
