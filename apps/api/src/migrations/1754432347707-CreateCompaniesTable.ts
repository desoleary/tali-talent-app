import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCompaniesTable1754432347707 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'companies',
                columns: [
                    { name: 'uuid', type: 'char', length: '36', isPrimary: true, isGenerated: true, generationStrategy: 'uuid' },
                    { name: 'name', type: 'varchar', length: '255' },
                    { name: 'industry', type: 'varchar', length: '100', isNullable: true },
                    { name: 'website', type: 'varchar', length: '2048', isNullable: true },
                    { name: 'notes', type: 'text', isNullable: true },
                    { name: 'created_at', type: 'datetime', isNullable: false },
                    { name: 'updated_at', type: 'datetime', isNullable: false },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('companies');
    }
}