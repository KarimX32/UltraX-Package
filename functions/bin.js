try {
    require.resolve("node-fetch")
} catch (e) {
    throw new Error("[UltraX] => Cannot find module 'node-fetch' Please do ' npm i node-fetch@latest '")
}
/**
 * Bin a code
 * @param {String} code Code to be bin
 * @returns {Promise<String>}
 */
module.exports = async (code, edit = true) => {
    let editable = 1;
    if (edit === false) editable = 0;
    // replaces all '`' with air.
    code = code.replace("```js", "").replace("```", "").replace("`", "");
    // initilizes params from nodejs 'url' npm
    const params = (new(require("url").URLSearchParams)());
    params.append('content', code);
    params.append('edible', editable);
    if (edit === false) params.append('edible', 1);
    let a = await require("node-fetch")("https://pocket-inc.com/bin/api/create.php", {
        body: params,
        method: 'post'
    }).then(r => {
        return r.text()
    });
    return a;
}
