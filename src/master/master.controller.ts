import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MasterService } from './master.service';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';

@Controller('master')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @Post('create')
  async create(@Body() createMasterDto: CreateMasterDto) {
    return await this.masterService.create(createMasterDto);
  }

  @Get('get-all')
  async findAll() {
    return await this.masterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.masterService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMasterDto: UpdateMasterDto,
  ) {
    return await this.masterService.update(+id, updateMasterDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.masterService.remove(+id);
  }
}
