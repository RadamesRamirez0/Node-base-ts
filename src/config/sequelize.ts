import { Sequelize, Dialect } from 'sequelize';

export default new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT as Dialect,
        dialectOptions: {
            encrypt: true
        },
        logging: false
    }
);

