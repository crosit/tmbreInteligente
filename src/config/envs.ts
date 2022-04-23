import dotenv from "dotenv";
dotenv.config();

const config = {
  APP_PORT: process.env.APP_PORT,
  typeorm: {
    TYPEORM_CONNECTION: process.env.TYPEORM_CONNECTION,
    TYPEORM_HOST: process.env.TYPEORM_HOST,
    TYPEORM_USERNAME: process.env.TYPEORM_USERNAME,
    TYPEORM_PASSWORD: process.env.TYPEORM_PASSWORD,
    TYPEORM_DATABASE: process.env.TYPEORM_DATABASE,
    TYPEORM_PORT: process.env.TYPEORM_PORT,
    TYPEORM_SYNCHRONIZE: process.env.TYPEORM_SYNCHRONIZE,
    TYPEORM_LOGGING: process.env.TYPEORM_LOGGING,
    TYPEORM_ENTITIES: process.env.TYPEORM_ENTITIES,
    TYPEORM_MIGRATIONS: process.env.TYPEORM_MIGRATIONS,
    TYPEORM_MIGRATIONS_DIR: process.env.TYPEORM_MIGRATIONS_DIR,
    TYPEORM_MIGRATIONS_TABLE_NAME: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
  },
};

export default config;
