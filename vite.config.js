import restart from 'vite-plugin-restart'
import glsl from 'vite-plugin-glsl'
import compression from 'vite-plugin-compression'; 

export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true, // Open to local network and display URL
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: '../dist', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true, // Add sourcemap
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor'; // Agrupa los módulos de node_modules en un solo archivo
                    }
                }
            }
        }

    },
    plugins:
    [
        restart({ restart: [ '../static/**', ] }), // Restart server on static file change
        glsl(), // Handle shader files
        compression({ algorithm: 'brotliCompress', ext: '.br' }), 
        compression({ algorithm: 'gzip', ext: '.gz' }), 
    ]
}