import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Company } from '../companies/entities/company.entity';

// ensure we run in test mode
process.env.NODE_ENV = process.env.NODE_ENV || 'test';

// point to your test DB via env if needed
const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306;
const username = process.env.DB_USER || 'root';
const password = process.env.DB_PASS || '';
const database = process.env.DB_NAME || 'tali_talent_test';

export let ds: DataSource;

export async function initTestDB() {
    // No migrations; auto-create schema from entities
    ds = new DataSource({
        type: 'mysql',
        host,
        port,
        username,
        password,
        database,
        synchronize: true,
        logging: false,
        entities: [Company],
        migrations: [], // <- important
    });
    await ds.initialize();
    return ds;
}

export async function closeTestDB() {
    if (ds?.isInitialized) await ds.destroy();
}