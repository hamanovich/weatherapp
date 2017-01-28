module.exports = {
    main: './app/main.aot.ts',
        vendor: [
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/core',
        '@angular/common',
        '@angular/http',
        'rxjs'
    ],
        polyfill: [
        'core-js/client/shim',
        'zone.js/dist/zone',
        'zone.js/dist/long-stack-trace-zone'
    ]
};
