import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCompanies1685732741932 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE companies (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        industry VARCHAR(100),
        health_score DECIMAL(5,2) DEFAULT 0.0,
        risk_segment VARCHAR(50),
        last_assessment_at DATETIME,
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_industry (industry),
        INDEX idx_risk_segment (risk_segment)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE companies;`);
  }
}
