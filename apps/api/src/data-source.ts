import 'reflect-metadata';
import path from 'node:path';
import { DataSource } from 'typeorm';
import { Company } from './companies/entities/company.entity';

const isTest = process.env.NODE_ENV === 'test';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || (isTest ? 'tali_talent_test' : 'tali_talent'),
    synchronize: isTest,               // true in tests, false otherwise
    logging: false,
    entities: [Company],
    migrations: isTest ? [] : [path.join(__dirname, 'migrations/*.{ts,js}')],
});
