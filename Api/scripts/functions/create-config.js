const fs = require('fs');
const path = require('path');

const { join } = path;
const { writeFile, readFile} = fs.promises;

async function createConfig(filename, config, postdirpath = '../..') {
    const filepath = join(__dirname, postdirpath, filename);

    let data;

    switch(typeof config) {
        case 'object':
            data = JSON.stringify(config, null, 2);
            break;
        case 'string':
            data = config.trim();
            break;
        default:
            data = config;
    }

    try {
        console.log(`Creating "${filename}"`);
        
        await readFile(filepath);
        console.log(`- Configuration file "${filename}" already exists`);
    } catch (error) {
        await writeFile(filepath, data);
        console.log(`- Configuration file "${filename}" was created`);
    }
}

module.exports = createConfig;