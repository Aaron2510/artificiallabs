import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // React Strict Mode (optional)
    reactStrictMode: true,

    // Webpack configuration
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },

    // SASS options
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'styles')],
    },
};

export default nextConfig;
