import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'companies' })
export class Company {
    @PrimaryGeneratedColumn('uuid')
    uuid!: string;

    @Column('varchar', { length: 255 })
    name!: string;

    @Column('varchar', { length: 100, nullable: true })
    industry?: string;

    @Column('varchar', { length: 2048, nullable: true })
    website?: string;

    @Column('text', { nullable: true })
    notes?: string;

    @CreateDateColumn({ name: 'created_at', type: 'datetime' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
    updatedAt!: Date;
}