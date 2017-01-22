const path = require('path');
const childProcess = require('child_process');
const chokidar = require('chokidar');

const binPath = childProcess.execSync('npm bin', {
    encoding: 'utf8',
    cwd: process.cwd()
});

const ngcCommand = 'ngc -p ./tsconfig.json';
const fullCommand = binPath.trim() + '/' + ngcCommand;

chokidar.watch(
    ['src/app/**/*.component.ts', 'src/app/**/*.html', 'src/app/**/*.css'],
    {ignoreInitial: true}
).on('all', () => {
    console.info(`> ${ngcCommand}`);
    childProcess.execSync(fullCommand, {
        encoding: 'utf8',
        cwd: process.cwd()
    });
    console.info('> ngc finished');
});