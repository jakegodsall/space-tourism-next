const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};


module.exports = nextConfig;

module.exports = {
    output: 'standalone',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
};
