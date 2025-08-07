import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import { DataSource } from 'typeorm';
import { Company } from './company.entity';

// What callers can override when building/creating
export type CompanyInput = Partial<
    Pick<Company, 'name' | 'industry' | 'website' | 'notes'>
>;

// Transient params (not persisted) — we use ds to persist on demand
export type CompanyTransient = { ds?: DataSource };

export const companyFactory = Factory.define<Company, CompanyTransient>(({ sequence }) => {
    const c = new Company();
    c.name = `${faker.company.name()} ${sequence}`;
    c.industry = faker.commerce.department();
    c.website = faker.internet.url();
    c.notes = faker.lorem.sentence();
    return c;
});

// Build a proper entity instance (not persisted)
export const buildCompanyEntity = (
    overrides?: CompanyInput,
    transient?: CompanyTransient
): Company => {
    return companyFactory.build(overrides, { transient });
};

// Persisted entity (uses ds transient)
export const createCompanyEntity = async (
    overrides?: CompanyInput,
    transient?: CompanyTransient
): Promise<Company> => {
    const { ds } = transient || {};
    if (!ds) throw new Error('createCompanyEntity requires transient.ds DataSource');

    const entity = buildCompanyEntity(overrides, transient);
    return ds.getRepository(Company).save(entity);
};

// Convenience: create many
export const createManyCompanies = async (
    n: number,
    overrides?: CompanyInput,
    transient?: CompanyTransient
): Promise<Company[]> => {
    const out: Company[] = [];
    for (let i = 0; i < n; i++) {
        out.push(await createCompanyEntity(overrides, transient));
    }
    return out;
};