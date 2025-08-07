import 'reflect-metadata';
import { getMetadataArgsStorage } from 'typeorm';
import { Company } from './company.entity';

describe('Company entity', () => {
    it('registers the entity with the explicit table name', () => {
        const table = getMetadataArgsStorage().tables.find(t => t.target === Company);
        expect(table).toBeDefined();
        expect(table!.name).toBe('companies');
    });

    it('has a UUID primary key named uuid', () => {
        const cols = getMetadataArgsStorage().columns.filter(c => c.target === Company);
        const uuidCol = cols.find(c => c.propertyName === 'uuid');
        expect(uuidCol).toBeDefined();

        const gen = getMetadataArgsStorage().generations.find(
            g => g.target === Company && g.propertyName === 'uuid'
        );
        expect(gen).toBeDefined();
        expect(gen!.strategy).toBe('uuid');
    });

    it('defines name as varchar(255) NOT NULL', () => {
        const name = getMetadataArgsStorage().columns.find(c => c.target === Company && c.propertyName === 'name');
        expect(name).toBeDefined();
        expect(name!.options.type).toBe('varchar');
        expect(name!.options.length).toBe(255);
        expect(name!.options.nullable).toBeUndefined(); // default false
    });

    it('defines industry as varchar(100) NULL', () => {
        const industry = getMetadataArgsStorage().columns.find(c => c.target === Company && c.propertyName === 'industry');
        expect(industry).toBeDefined();
        expect(industry!.options.type).toBe('varchar');
        expect(industry!.options.length).toBe(100);
        expect(industry!.options.nullable).toBe(true);
    });

    it('defines website as varchar(2048) NULL', () => {
        const website = getMetadataArgsStorage().columns.find(c => c.target === Company && c.propertyName === 'website');
        expect(website).toBeDefined();
        expect(website!.options.type).toBe('varchar');
        expect(website!.options.length).toBe(2048);
        expect(website!.options.nullable).toBe(true);
    });

    it('defines notes as text NULL', () => {
        const notes = getMetadataArgsStorage().columns.find(c => c.target === Company && c.propertyName === 'notes');
        expect(notes).toBeDefined();
        expect(notes!.options.type).toBe('text');
        expect(notes!.options.nullable).toBe(true);
    });

    it('defines createdAt with CURRENT_TIMESTAMP default', () => {
        const createdAt = getMetadataArgsStorage().columns.find(c => c.target === Company && c.propertyName === 'createdAt');
        expect(createdAt).toBeDefined();
        expect(createdAt!.options.type).toBe('datetime');
        expect(typeof createdAt!.options.default).toBe('undefined');
    });

    it('defines updatedAt with CURRENT_TIMESTAMP default and onUpdate', () => {
        const updatedAt = getMetadataArgsStorage().columns.find(c => c.target === Company && c.propertyName === 'updatedAt');
        expect(updatedAt).toBeDefined();
        expect(updatedAt!.options.type).toBe('datetime');
        expect(typeof updatedAt!.options.default).toBe('undefined');
        expect(updatedAt!.options.onUpdate).toBe(undefined);
    });

    it('is constructible with required fields', () => {
        const c = new Company();
        c.name = 'Acme Inc.';
        expect(c.name).toBe('Acme Inc.');
    });
});