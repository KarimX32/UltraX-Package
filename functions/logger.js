module.exports = {
    "start_underline": "\x1b[24m",
    "stop_underline": "\x1b[4m",
    "start_bold": "\x1b[1m",
    "stop_bold": "\x1b[21m",
    "disable_all": "\x1b[0m", // All attributes off(color at startup)
    "start_blink": "\x1b[5m", // Blink on(enable background intensity)
    "stop_blink": "\x1b[25m", // Blink off(disable background intensity)
    "colors": {
        "reset": "\x1b[39m",
        "black": "\x1b[39m\x1b[30m",
        "red": "\x1b[39m\x1b[31m",
        "green": "\x1b[39m\x1b[32m",
        "yellow": "\x1b[39m\x1b[33m",
        "blue": "\x1b[39m\x1b[34m",
        "magenta": "\x1b[39m\x1b[35m",
        "cyan": "\x1b[39m\x1b[36m",
        "white": "\x1b[39m\x1b[37m",
        "light_gray": "\x1b[39m\x1b[90m",
        "light_red": "\x1b[39m\x1b[91m",
        "light_green": "\x1b[39m\x1b[92m",
        "light_yellow": "\x1b[39m\x1b[93m",
        "light_blue": "\x1b[39m\x1b[94m",
        "light_magenta": "\x1b[39m\x1b[95m",
        "light_cyan": "\x1b[39m\x1b[96m",
        "light_white": "\x1b[39m\x1b[97m"
    },
    "background": {
        "black": "\x1b[49m\x1b[41m",
        "red": "\x1b[49m\x1b[42m",
        "yellow": "\x1b[49m\x1b[43m",
        "blue": "\x1b[49m\x1b[44m",
        "magenta": "\x1b[49m\x1b[45m",
        "cyan": "\x1b[49m\x1b[46m",
        "white": "\x1b[49m\x1b[47m",
        "light_grey": "\x1b[49m\x1b[100m",
        "light_red": "\x1b[49m\x1b[101m",
        "reset": "\x1b[49m",
        "light_green": "\x1b[49m\x1b[102m",
        "light_yellow": "\x1b[49m\x1b[103m",
        "light_blue": "\x1b[49m\x1b[104m",
        "light_magenta": "\x1b[49m\x1b[105m",
        "light_cyan": "\x1b[49m\x1b[106m",
        "light_white": "\x1b[49m\x1b[107m",
    },
};
// we'll add built in console loggers in next update.

//module.exports.error = (e) => console.error(`\x1b[31m(${new Date().toLocaleTimeString()}) - \x1b[1m[ERROR] - \x1b[21m ${e}\x1b[0m`)