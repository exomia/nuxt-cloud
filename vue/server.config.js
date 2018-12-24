import { KoaAdapter } from '@uvue/server'

export default {
    adapter: KoaAdapter,
    plugins: [
        // Serve static files
        '@uvue/server/plugins/static',
        // Compress responses
        // '@uvue/server/plugins/gzip',
        // Parse cookies
        [
            '@uvue/server/plugins/cookie',
            {
                secret: 'secret'
            }
        ],
        // Modern build
        '@uvue/server/plugins/modernBuild',
        // Init api
        './src/api/install'
    ],
    // Watch for changes in these files to automatically reboot server
    watch: ['src/api/**/*.js']
}
