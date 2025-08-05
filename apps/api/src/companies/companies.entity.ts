import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 100, nullable: true })
  industry: string;

  @Column('decimal', { precision: 5, scale: 2, default: 0.0 })
  healthScore: number;

  @Column({ length: 50, nullable: true })
  riskSegment: string;

  @Column({ type: 'datetime', nullable: true })
  lastAssessmentAt: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
