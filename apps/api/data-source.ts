import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Company } from './src/companies/entities/company.entity';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'tali_talent',
    synchronize: false, // use migrations!
    logging: false,
    entities: [Company],
    migrations: ['src/migrations/*.ts'],
});