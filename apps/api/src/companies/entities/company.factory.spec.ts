import 'reflect-metadata';
import { buildCompanyEntity, createCompanyEntity } from './company.factory';
import {describe} from "vitest";

import { initTestDB, closeTestDB, ds } from '../../internals/db-test-setup';
import { Company } from './company.entity';

describe('companyFactory (unit)', () => {
    describe('unit', () => {
        it('builds an in-memory Company with defaults', () => {
            const c = buildCompanyEntity();
            expect(c.name).toBeTruthy();
        });

        it('respects overrides', () => {
            const c = buildCompanyEntity({ name: 'Acme' });
            expect(c.name).toBe('Acme');
        });
    })

    describe('integration', () => {
        beforeAll(async () => { await initTestDB(); });
        afterAll(async () => { await closeTestDB(); });

        describe('companyFactory (integration)', () => {
            it('creates & persists a Company', async () => {
                const saved = await createCompanyEntity({ name: 'Acme' }, { ds });
                const found = await ds.getRepository(Company).findOneBy({ uuid: saved.uuid });
                expect(found?.name).toBe('Acme');
            });
        });
    })
});