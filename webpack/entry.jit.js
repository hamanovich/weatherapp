module.exports = {
    main: './app/main.jit.ts',
    polyfill: [
        'core-js/client/shim',
        'zone.js/dist/zone',
        'zone.js/dist/long-stack-trace-zone'
    ]
};
