// const path = require('path');
 
module.exports = {
    mode: 'development',
    entry: {index: './src/index.js',
            marker: './src/marker.js'
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    }
};