/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['cdn-icons-png.flaticon.com']
    },
    webpack: (config) => {
        config.resolve = {
          ...config.resolve,
          fallback: {
            async_hooks: false,
          },
        };
        return config;
    },
};

export default nextConfig;
