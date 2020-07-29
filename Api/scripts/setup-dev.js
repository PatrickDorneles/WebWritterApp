// eslint-disable

const createConfig = require('./functions/create-config');

(async () => {
    console.log('--- INITIALIZING DEV CONFIG SETUP ---');

    await createConfig('ormconfig.json',{
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres_user",
        password: "postgres_pass",
        database: "web_writter_dev",
        entities: ["dist/**/*.entity{.ts,.js}"],
        migrations: ["dist/database/migrations/*{.ts,.js}"],
        cli: {
            migrationsDir: "src/database/migrations"
        }
    });

    console.log('--- ENDING DEV CONFIG SETUP ---');
})();
