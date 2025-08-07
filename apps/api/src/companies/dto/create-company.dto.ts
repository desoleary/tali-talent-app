import { IsString, IsOptional, IsNumber, IsDateString, MaxLength } from 'class-validator';

export class CreateCompanyDto {
    @IsString()
    @MaxLength(255)
    name!: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    industry?: string;

    @IsOptional()
    @IsNumber()
    healthScore?: number;

    @IsOptional()
    @IsString()
    @MaxLength(50)
    riskSegment?: string;

    @IsOptional()
    @IsDateString()
    lastAssessmentAt?: string;
}