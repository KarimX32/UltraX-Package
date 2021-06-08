function sleep(milliseconds) {
    if(!milliseconds) throw new TypeError("Time isn't specified")
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

module.exports =  sleep;