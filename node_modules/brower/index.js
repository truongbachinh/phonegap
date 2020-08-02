const child_process = require('child_process');
const exec = child_process.exec;
const os = require('os');
const mac = os.EOL === '\r';
const win = os.EOL === '\r\n';

module.exports = {
    start: function (url) {
        try {
            if (win) {
                exec('start ' + url);
            } else if (mac) {
                exec();
            } else {
                {
                    console.warn(`Your system don't support this  operation`);
                }
            }
        } catch (e) {
            throw new Error(e);
        }
    }
}