/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.holopin.me',
                port: '',
                pathname: '/*'
            },
            {
                protocol: 'https',
                hostname: 'contributors.novu.co',
                port: '',
                pathname: '/profiles/*'
            }
        ]
    }
}

module.exports = nextConfig
