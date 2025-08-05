import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCompanies1685732741932 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companies',
        columns: [
          {
            name: 'id',
            type: 'char',
            length: '36',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            default: 'UUID()',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'industry',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'healthScore',
            type: 'decimal',
            precision: 5,
            scale: 2,
            default: '0.0',
          },
          {
            name: 'riskSegment',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'lastAssessmentAt',
            type: 'datetime',
            isNullable: true,
          },
          {
            name: 'createdAt',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('companies');
  }
}
