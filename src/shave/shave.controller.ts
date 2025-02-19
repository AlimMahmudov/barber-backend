import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShaveService } from './shave.service';
import { CreateShaveDto } from './dto/create-shave.dto';
import { UpdateShaveDto } from './dto/update-shave.dto';

@Controller('shave')
export class ShaveController {
  constructor(private readonly shaveService: ShaveService) {}

  @Post()
  async create(@Body() createShaveDto: CreateShaveDto) {
    return await this.shaveService.create(createShaveDto);
  }

  @Get()
  async findAll() {
    return await this.shaveService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.shaveService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateShaveDto: UpdateShaveDto,
  ) {
    return await this.shaveService.update(+id, updateShaveDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.shaveService.remove(+id);
  }
}
