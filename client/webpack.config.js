const path = require('path');

function relPath(childPath) {
    return path.join(__dirname, childPath);
}

module.exports = {
    resolve: {
        alias: {
            models: relPath("../server/src/models")
        }
    }
};