module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.svelte', './src/**/*.css'],
    plugins: [
        require('daisyui')
    ]
}