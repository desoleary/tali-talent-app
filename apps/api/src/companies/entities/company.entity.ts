import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Company {
    @PrimaryGeneratedColumn('increment') // auto-increment integer ID
    id!: number;

    @Column('varchar', { length: 255 })
    name!: string;

    @Column('varchar', { length: 100, nullable: true })
    industry?: string;

    @Column('varchar', { length: 255, nullable: true })
    website?: string;

    @Column('text', { nullable: true })
    notes?: string;

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;

    @Column('timestamp', {
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt!: Date;
}