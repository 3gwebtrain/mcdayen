const { join } = require('path');
module.exports = {
    content: [join(__dirname, 'src/**/*{js,ts,tsx,jsx}')],
    theme: {
        extend: {},
    },
    plugins: [],
};
