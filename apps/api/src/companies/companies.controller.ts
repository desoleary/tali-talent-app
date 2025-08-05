import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './companies.entity';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  findAll(): Promise<Company[]> {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Company | null> {
    return this.companiesService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Company>): Promise<Company> {
    return this.companiesService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<Company>): Promise<Company | null> {
    return this.companiesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.companiesService.remove(id);
  }
}
