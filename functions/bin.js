module.exports = async (code) => {
    // replaces all '`' with air.
    code = code.replace("```js", "").replace("```", "").replace("`", "");
    // initilizes params from nodejs 'url' npm
    const params = (new(require("url").URLSearchParams)());
    // add's all code as 'content' parimeter
    params.append('content', code);
    return await require("node-fetch")("https://pocket-inc.ml/bin/api/create_post.php", {
        body: params,
        method: 'post'
    }).then(r => {
        return r.text()
    });
}
