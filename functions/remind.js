const schema = require("./schema/remind")
const ms = require("./non-public-functions/ms")
module.exports = async (memberID, time, reason) => {
    if (!memberID) throw new Error('[UltraX] Error: Member is not defined in remind function')
    if (!time) throw new Error('[UltraX] Error: Time is not defined in remind function')
    if (!reason) throw new Error('[UltraX] Error: Reason is not defined in remind function')
    if (!ms(time)) throw new Error('[UltraX] Error: Time is invalid in remind function')
    const data = new schema({
        memberID: (memberID),
        reason: (reason),
        time: (ms(time) + Date.now()),
            timeMS: ms(time)
    });
    data.save().catch(e => console.log("[UltraX] Error: saving remind to db"))
};
module.exports.startRemind = async (client) => {
    if (!client) throw new Error('[UltraX] Error: Client is not defined in remind function')
    setInterval(() => {
        schema.find({}, function (err, docs) {
            if (err) return console.log(err)
            docs.forEach(async doc => {
                if (doc.time <= Date.now()) {
                    await schema.deleteOne(doc);
                    await client.users.fetch(doc.memberID);
                    client.emit('reminder', client.users.cache.get(doc.memberID), doc.reason, await parseMS(doc.timeMS))
                };
            });
        });
    }, 10000); // 10000 milsec
}
async function parseMS(ms) {
    let seconds = ms / 1000,
        days = parseInt(seconds / 86400);
    seconds = seconds % 86400

    let hours = parseInt(seconds / 3600);
    seconds = seconds % 3600

    let minutes = parseInt(seconds / 60);
    seconds = parseInt(seconds % 60)

    if (days) {
        return `${days} day, ${hours} hours, ${minutes} minutes`
    } else if (hours) {
        return `${hours} hours, ${minutes} minutes, ${seconds} seconds`
    } else if (minutes) {
        return `${minutes} minutes, ${seconds} seconds`
    }

    return `${seconds} second(s)`
};