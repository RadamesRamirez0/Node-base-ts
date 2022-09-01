import { Dialect, Sequelize } from 'sequelize';


export default new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PWD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT as Dialect,
        dialectOptions: {
            options: {
                encrypt: true,
            }
        }
    }
);

